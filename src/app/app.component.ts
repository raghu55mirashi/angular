import { Component } from '@angular/core';
import {UserdataService} from './userdata.service'

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

interface TodoList{
  id: number,
  name: string,
  done: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTestApp';
  isTrue: boolean = true;
  todoData: TodoList[] = [
    {id: 1,name: 'task1', done: true},
    {id: 2,name: 'task2', done: true},
    {id: 3,name: 'task3', done: true},
  ]

  submitData(value:any){
    console.log(value)
  }

  parentComponent(value:any){
    console.log(value);
  }

  alerts!: Alert[];

  constructor(private data: UserdataService) {
    console.log('usedata', data.getData());
    
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
}
