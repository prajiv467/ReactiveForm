import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  // Jit Input this code to update child value
  @Input() item='';
// Jit Input this code to update child value




  //Child to parent
  childData:number=20;
 @Output() DataEvent:EventEmitter<any>= new EventEmitter()
  
  ngOnInit(): void {
      
  
  }



}
