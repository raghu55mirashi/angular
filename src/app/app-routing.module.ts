import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from './core/todos/todos.component';
import {UsersComponent} from './core/users/users.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {LoginComponent} from './core/login/login.component';

const routes: Routes = [
  {
    path: 'todos', component: TodosComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
