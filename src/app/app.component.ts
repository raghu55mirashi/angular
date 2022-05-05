import { Component } from '@angular/core';
import {UserdataService} from './userdata.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


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
  }
];

interface TodoList{
  id: number,
  name: string,
  done: boolean
}

interface UserData{
  username: string,
  email: string;
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
  ];
  userdata: UserData = {
    'username': 'raghu',
    'email': 'test@gmail.com'
  }

  showLoader: boolean = false;
  submitData(value:any){
    console.log(value)
    this.showLoader = true;
    setTimeout(()=>{
      this.showLoader = false;
    },5000)
  }

  parentComponent(value:any){
    console.log(value);
  }

  alerts!: Alert[];

  constructor(private data: UserdataService) {
    data.getData().subscribe((data)=>{
      console.log('usedata', data) 

    });
    
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  get username(){
    return this.loginForm.get('username');
  }
  get email(){
    return this.loginForm.get('email');
  }
}
