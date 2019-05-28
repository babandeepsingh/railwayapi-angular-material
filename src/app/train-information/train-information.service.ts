import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_KEY='p75idieik8';
@Injectable()
export class TrainInformationService {

  constructor(private http : HttpClient) { }
  getData(src,des,date) {
    return this.http.get(`https://api.railwayapi.com/v2/between/source/${src}/dest/${des}/date/${date}/apikey/${API_KEY}/`);
     
  }
  getStation(src){
    return this.http.get(`https://api.railwayapi.com/v2/suggest-station/name/${src}/apikey/${API_KEY}/`);
  }
  getStationName(src){
    return this.http.get(`https://api.railwayapi.com/v2/name-to-code/station/${src}/apikey/${API_KEY}/`)
  }
}