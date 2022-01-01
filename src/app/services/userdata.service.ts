import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  userServiceFunction()
  {
    return[
    {name:'Amit',age:'25',email:'amit@Test.com'},
    {name:'Sunil',age:'32',email:'sunil@Test.com'},
    {name:'Anil',age:'28',email:'anil@Test.com'}
    ]
  }
}
