import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  getData(){
    return {
      "name": 'raghu'
    }
  }
}
