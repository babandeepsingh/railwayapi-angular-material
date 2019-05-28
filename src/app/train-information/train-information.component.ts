import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TrainInformationService } from './train-information.service';
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-train-information',
  templateUrl: './train-information.component.html',
  styleUrls: ['./train-information.component.css']
})
export class TrainInformationComponent implements OnInit {
  trainSource: string;
  trainDestiny: string;
  mydate: string;
  finalDate: string;
  visible = false;
  trainInfor: string;
  dataSource;
  myControl = new FormControl();
  options: any = [];
  optionsCode: any = {};
  trainSource1;
  trainDestiny1;

  showSpinner: boolean = false;
  displayedColumns = ['name', 'number', 'src_departure_time', 'dest_arrival_time'];
  constructor(private train: TrainInformationService) { }
  ngOnInit() {
    this.options = [];
  }
  onSubmit(form: NgForm) {
    this.showSpinner = true;
    this.trainSource = form.value.src;
    // this.train.getStationName(this.trainSource).subscribe(data=>{
    //   data.stations.map(value=>{
    //     console.log(value);
    //     if(value.name==this.trainSource){
    //       this.trainSource1 = value.code;
    //     }
    //   })
    //   console.log(this.trainSource1)
    // })
    this.trainDestiny = form.value.des;
    //  this.train.getStationName(this.trainDestiny).subscribe(data=>{
    //   data.stations.map(value=>{
    //     if(value.name==this.trainDestiny){
    //       this.trainDestiny1 = value.code;
    //     }
    //   })
    // })
    this.mydate = form.value.date;
    var d = new Date(this.mydate);
    console.log(d)
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();

    this.finalDate = curr_date + '-' + curr_month + '-' + curr_year;
    
    setTimeout(()=>{
      console.log(this.trainSource1, this.trainDestiny1, this.finalDate);
    //   this.train.getData(this.trainSource1, this.trainDestiny1, this.finalDate).subscribe(data => {
    //   this.visible = true;
    //   this.showSpinner = false;
    //   console.log(data)
    //   this.trainInfor = data.trains;
    //   this.dataSource = new MatTableDataSource(this.trainInfor);
    // });

      this.train.getData(this.trainSource, this.trainDestiny, this.finalDate).subscribe(data => {
      this.visible = true;
      this.showSpinner = false;
      console.log(data)
      this.trainInfor = data.trains;
      this.dataSource = new MatTableDataSource(this.trainInfor);
    });
    },2000)
  }
  onKey(event: any) {
    this.trainSource = event.target.value;
   
    this.train.getStation(this.trainSource).subscribe(data => {
      for(let i= 0; i<10; i++){
        this.options.push(data.stations[i].code);
        //this.optionsCode.push(data.stations[i].code);
      }
     // data.map(value=>{name,code}=value;)
    }
    )
    this.options =[];

  }


}