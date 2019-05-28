import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import {NgForm} from '@angular/forms';
import {Router, Event, NavigationStart, NavigationEnd} from '@angular/router';
import {MatSort,MatSortable,MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   name: string;
  position: number;
  weight: number;
  symbol: string;
  dataSource;
  displayedColumns = ['station', 'distance' , 'schdep' ];

  visible = false;
  trainNumber:string;
  trainInfor:any;
  trainInfo:any;
  trainName:any;
  class:any;
  arrayClass:any;
  showSpinner: boolean = false;
  constructor(private about: AboutService, private _route:Router) {
  }
  onSubmit(form : NgForm){
    this.showSpinner = true;
    this.trainNumber = form.value.name;
    console.log(this.trainNumber);
    this.about.getData(this.trainNumber).subscribe(data=>{
      this.showSpinner = false;
      console.log(data);
      this.trainInfor = data.route;
      this.dataSource = new MatTableDataSource(this.trainInfor);
      this.trainName = data.train.name;
      this.class = data.train.classes;
     if(this.class.available == "Y"){
       this.arrayClass.name = this.class.name,
       this.arrayClass.id = this.class.code
     }
     console.log(this.arrayClass)
      console.log(this.class);
      this.visible = true ;
    })
  }
  ngOnInit() {
  }

}