import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipDataService {

  constructor(private http: HttpClient){}

  getTipData()
  {
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2019');
  }
}
