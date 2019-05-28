import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY='p75idieik8';
@Injectable()
export class AboutService {

  constructor(private http : HttpClient) { }
  getData(url){
    return this.http.get(`https://api.railwayapi.com/v2/route/train/${url}/apikey/${API_KEY}/`)
  }
}