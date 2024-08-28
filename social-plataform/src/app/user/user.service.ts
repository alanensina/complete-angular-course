import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [ 
    {id: 1, name: "John"},
    {id: 2, name: "Mary"},
    {id: 3, name: "Phill"}
  ]

  constructor() {}

  getUsers(){
    return of(this.users);
  }

}
