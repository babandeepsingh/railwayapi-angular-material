import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TrainInformationService } from '../train-information/train-information.service';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
   myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  trainSource;
  constructor(private train : TrainInformationService) { }

  ngOnInit() {
  }
  onKey(event: any){
    this.trainSource = event.target.value ;
    this.train.getStation(this.trainSource).subscribe(data=>{
      for(var i= 0; i<5; i++){
          this.options.push(data.stations[i].name);
        }
  })
  }
}