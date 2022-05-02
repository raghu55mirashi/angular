import { Component, Input, OnInit } from '@angular/core';

interface TodoList{
  id: number,
  name: string,
  done: boolean
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() mytodo!: TodoList;
  constructor() { }

  ngOnInit(): void {
  }

  convertString(){
    
  }

}
