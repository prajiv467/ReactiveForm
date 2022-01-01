import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  usersValueDisplay:any;
  
  constructor(private userdata:UserdataService) {

    this.usersValueDisplay=userdata.userServiceFunction()

  }

  ngOnInit(): void {
  }

}
