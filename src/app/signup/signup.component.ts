import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormArray
} from "@angular/forms";

import { UserModel } from "./userModel";
import { UserService } from "./user.service";
import { DuplicateEmailCheck } from "../utility/duplicateEmailCheck";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  invalidNamesArr: string[] = ["Hello", "Angular"];
  x:any;
  signupForm=new FormGroup(
    {
      //FormControl 2nd paramter is for validation 
     // email: new FormControl('',[Validators.required,Validators.email]),
      user_name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]+$')]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)])
     
    })
  
    get user_name(){ return this.signupForm.get('user_name'); }
    get password()  {return this.signupForm.get('password');}
    get user_email()  {return this.signupForm.get('user_email');}   

       constructor(private _userServiceObj: UserService) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({

      user_name: new FormControl('',[Validators.required,DuplicateEmailCheck.checkEmail(this._userServiceObj),Validators.minLength(5),Validators.pattern('[a-zA-Z]+$')]),
      user_email: new FormControl('',[Validators.required,Validators.email]),
      
      password_group: new FormGroup(
        {
          user_password: new FormControl(null, [Validators.required]),
          user_confirmPassword: new FormControl(null, [Validators.required])
        },
        [this.matchPasswords.bind(this)]
      ),

      user_phone: new FormControl(null),
      user_gender: new FormControl("Male"),
      user_hobbies: new FormArray([]),
      user_city: new FormControl("Ahmedabad", [Validators.required]),
      user_notification: new FormControl("email")
    });

    this.signupForm.get("user_notification")
    ?.valueChanges.subscribe(x => this.setNotificationValidation(x));
  }

  onSubmit() {
    console.log(this.signupForm);
    let hobbiesStr = "";
    for (let i = 0; i < this.signupForm.get("user_hobbies")?.value.length; i++) {
      if (i + 1 < this.signupForm.get("user_hobbies")?.value.length) {
        hobbiesStr += this.signupForm.get("user_hobbies")?.value[i] + ",";
      } else {
        hobbiesStr += this.signupForm.get("user_hobbies")?.value[i];
      }
    }

    const userItem: UserModel = new UserModel(
      this.signupForm.get("user_name")?.value,
      this.signupForm.get("user_email")?.value,
      this.signupForm.get("password_group")?.get("user_password")?.value,
      this.signupForm.get("user_phone")?.value,
      this.signupForm.get("user_gender")?.value,
      hobbiesStr,
      this.signupForm.get("user_city")?.value
    );

    this._userServiceObj.addUser(userItem).subscribe((data: any) => {
      if (data.affectedRows === 1) {
        alert("Welcome...!!");
        this.ngOnInit();
      } else {
        alert("Something went wrong");
      }
    });
  }

  matchPasswords(control: AbstractControl): { [key: string]: boolean } {
    if (
      control.get("user_password")?.value ===
      control.get("user_confirmPassword")?.value
    ) {
      return null as any;
    }
    return { passwordMatchError: true };
  }

  invalidNameValidation(control: AbstractControl): { [key: string]: boolean } {
    if (this.invalidNamesArr.indexOf(control.value) >= 0) {
      return { invalidName: true };
    }
    return null as any;
  }

  setNotificationValidation(value: string) {
    const phoneControl = this.signupForm.get("user_phone");
    const emailControl = this.signupForm.get("user_email");
    if (value == "phone") {
      phoneControl?.setValidators(Validators.required);
      emailControl?.clearValidators();
      emailControl?.setValidators(Validators.email);
    } else {
      phoneControl?.clearValidators();
      emailControl?.setValidators([Validators.email, Validators.required]);
      emailControl?.setAsyncValidators(
        DuplicateEmailCheck.checkEmail(this._userServiceObj)
      );
    }
    phoneControl?.updateValueAndValidity();
    emailControl?.updateValueAndValidity();
  }

  getControls() {
    return (<FormArray>this.signupForm.get("user_hobbies")).controls;
  }

  onAddHobbiesClick() {
    if (this.signupForm.get("user_hobbies")?.value.length < 3) {
      const control = new FormControl(null);
      (this.signupForm.get("user_hobbies") as FormArray).push(control);
    } else {
      alert("You can add maximum 3 Hobbies");
    }
  }

  onRemoveHobbiesClick(i:any) {
    (this.signupForm.get("user_hobbies") as FormArray).removeAt(i);
  }
}
