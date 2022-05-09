import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomFunctionService } from './custom-function.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token!: string;
  omitCalls = ['auth'];
  skipInterceptor = false;
  constructor(private router: Router, private customService: CustomFunctionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.omitCalls.forEach(api => {
      if (req.url.includes(api)) {
        this.skipInterceptor = true;
      }
    });
    this.token = this.customService.getUserToken();
    
    if (this.token || this.skipInterceptor) {
      const tokenizedReq = req.clone({ 
        setHeaders: {  
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
       });
      // const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.token) });
      return next.handle(tokenizedReq).pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 401) {
            this.customService.userLoggedOut();
            this.router.navigateByUrl('/login');
          }
        }
        return event;
      }));
    } else {
      this.customService.userLoggedOut();
      this.router.navigateByUrl('/login');
    }
    return next.handle(req);
  }
}
