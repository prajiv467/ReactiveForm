import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';

  usersValueDisplay:any;

  data: number = 10;
  
  constructor(private userdata:UserdataService) {

    this.usersValueDisplay=userdata.userServiceFunction()
    
  }
  updateChild(){
//console.warn(this.data);
    this.data=Math.floor(Math.random()*1000);
  }

}
