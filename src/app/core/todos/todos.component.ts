import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {TodoList} from '../../user.model'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title: string = '';
  isdisabled: boolean = true;
  todoList!: TodoList[];
  @Input() oldTodos!: TodoList[];
  @Output() parentComponent: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    // this.todoList = [
    //   {id: 1,name: 'test1', done: true},
    //   {id: 2,name: 'test2', done: true},
    //   {id: 3,name: 'test3', done: true},
    // ]
    // this.todoList = ['test1', 'test2']
  }
  
  onChange(value: any){
    console.log(value)
  }
  
  showData(value: string){
    this.title = value;
    this.isdisabled = false;
    this.parentComponent.emit({"name":"raghu"});
  }

  trackByTodo(index: number, todo: TodoList): number{
    return todo.id;
  }
}
