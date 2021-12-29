import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormArray,
  FormBuilder
} from "@angular/forms";
import {Router} from '@angular/router';

import { UserModel } from "../signup/userModel";
import { AuthService } from "./auth-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  Roles: any = ['Admin', 'Author', 'Reader'];
  ResigterForm=new FormGroup(
    {
     
      FullName: new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]+$')]),
      UserName: new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]+$')]),
      Password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      Mobile: new FormControl('',[Validators.required,Validators.minLength(5)]),
      UserType: new FormControl('',[Validators.required]),
     
    })
  
    get FullName(){ return this.ResigterForm.get('FullName'); }
    get UserName()  {return this.ResigterForm.get('UserName');}
    get Password()  {return this.ResigterForm.get('Password');}   
    get Mobile()  {return this.ResigterForm.get('Mobile');}   
    get UserType()  {return this.ResigterForm.get('UserType');}   
  
  

  constructor( private fb:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {

    this.ResigterForm=this.fb.group(
        {
          FullName:["",Validators.required],
          UserName:["",Validators.required],
          Mobile:["",Validators.required],
         // email:["",Validators.compose([Validators.required,Validators.email])],
          Password:["",Validators.required],
          UserType:["",Validators.required]

          // password: new FormControl('',[Validators.required,Validators.minLength(5)])
        })
     
        
            
            
        }
    
    onSignup()
        {
  this.http.post<any>("https://localhost:44374/api/Login/Signup",this.ResigterForm.value)
  .subscribe(res=>{
    alert("Signup Sucessfully");
    this.ResigterForm.reset();
    this.router.navigate(['login'])
  })
  }

}





