import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './core/todos/todos.component';
import { TodoItemComponent } from './core/todo-item/todo-item.component';
import { UsersComponent } from './core/users/users.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import { ButtonComponent } from './core/components/button/button.component';
import {InterceptorService} from './auth/interceptor.service';
import { LoginComponent } from './core/login/login.component';

const appRoutes: Routes = [
  {path: 'users', component: UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    UsersComponent,
    PageNotFoundComponent,
    CustomStyleDirective,
    SpinnerComponent,
    ButtonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
