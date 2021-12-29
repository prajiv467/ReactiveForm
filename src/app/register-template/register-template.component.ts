import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.css']
})
export class RegisterTemplateComponent implements OnInit {
  hide = true;

  RegisterUser(item:any)
  {
   console.warn(item)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
