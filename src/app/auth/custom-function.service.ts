import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomFunctionService {

  constructor() { }

  getUserToken(){
    return window.localStorage.getItem('token') || '';
  }
  userLoggedOut(){
    return window.localStorage.removeItem('token');
  }
}
