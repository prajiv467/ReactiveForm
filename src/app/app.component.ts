import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserdataService } from './services/userdata.service';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import {saveAs } from 'file-saver';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ReactiveForm';
  usersValueDisplay:any;
  showApiData:any;
  public gridApi:any;
  public gridColumnApi:any;
  public columnDefs:any;
  public animateRows!: boolean;
  public sortingOrder:any;
   enableSorting!: true;
  rowData!: Observable<any[]>;
  
  private popupParent: any;
  
  
factures = [];
columns  = ["Id","Reference","Quantite","Prix Unitaire"];
btnText:  String = "Export CSV";

    constructor(private userdata:UserdataService , private userDataApi:ApiService, private http:HttpClient) {
      var document: Document
    this.usersValueDisplay=userdata.userServiceFunction()
    //API Call
    userDataApi.student().subscribe((data)=>{
      console.warn("data",data)
      this.showApiData=data;
     
      this.columnDefs=[
          {headerName:"make",field:"make",width:250,sortingOrder:["asc","desc"]},
          {headerName:"model",field:"model",width:250,sortingOrder:["asc","desc"]},
          {headerName:"price",field:"price",width:250,sortingOrder:["asc","desc"],editable: true,aggFunc: 'sum'}
        ]
        
    })
    
  }
    
  OnGridReady(param:any){
    this.gridApi=param.gridApi;
    this.gridColumnApi=param.gridColumnApi;
 

    this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
    .subscribe(data=>{
      param.api.setRowData(data)
    }
      )
    
}

defaultColDef = {
  sortable: true,
  filter: true,
  
};

onBtnExport() {
  this.gridApi.exportDataAsCsv();
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



// Function for passing Data to grid
  

// End of Code for Function for passing Data to grid
}
