import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserdataService } from './services/userdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';
  usersValueDisplay:any;
  showApiData:any;


    constructor(private userdata:UserdataService , private userDataApi:ApiService) {

    this.usersValueDisplay=userdata.userServiceFunction()
    //API Call
    userDataApi.student().subscribe((data)=>{
      console.warn("data",data)
      this.showApiData=data;
    })
    
  }
  data = "Data pass to child";
  
   //Function for updating child data
  updateChild(){
  //console.warn(this.data);
   // this.data=Math.floor(Math.random()*1000);
  }
///End of code for Function for updating child data

//Function for updating child data via Form
  ChangeValue(data:any)
  {
    this.data=data.name;
  }
//End of code for Function for updating child data via Form



  // Function for passing child data to parent
    GetData(item:string)
  {
    console.warn(item);
  //  this.name=parentdata;
  }
 // End of code Function for passing child data to parent





}
