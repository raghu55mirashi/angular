import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showButton: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleButton(): void{
    console.log('clicked');
    
    this.showButton = !this.showButton;
    this.subject.next(this.showButton);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
