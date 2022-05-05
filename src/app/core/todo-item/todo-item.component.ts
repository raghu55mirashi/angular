import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {TodoList} from '../../user.model'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() mytodo!: TodoList;
  @Output() onDeleteTodo: EventEmitter<TodoList> = new EventEmitter()

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log('my', this.mytodo);

  }

  convertString(){
    
  }

  onDelete(todo: TodoList){
    this.onDeleteTodo.emit(todo);
  }

}
