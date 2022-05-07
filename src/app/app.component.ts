import { Component } from '@angular/core';
import {UserdataService} from './service/userdata.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoList} from './user.model';
import {UiService} from './service/ui.service';
import {Subscription} from 'rxjs';

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
  todoData: TodoList[] = [];
  userdata: UserData = {
    'username': 'raghu',
    'email': 'test@gmail.com'
  }

  showLoader: boolean = false;

  changeValue!: false;
  subscription!: Subscription;

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

  constructor(private data: UserdataService, private uiService: UiService) {
    data.getData().subscribe((data)=>{
      this.todoData = data;
    });
    
    this.reset();

    this.uiService.onToggle().subscribe(value =>
      this.changeValue = value
      )
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

  toggleBtn(){
    console.log('sss');
    this.uiService.toggleButton();
  }
}
