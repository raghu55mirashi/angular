import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TodoList} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }
  
  getData(): Observable<TodoList[]>{
    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get<TodoList[]>(url);
  }

  deleteData(todo: TodoList): Observable<TodoList>{
    let url = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
    return this.http.delete<TodoList>(url)
  }
}
