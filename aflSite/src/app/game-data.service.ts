import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http: HttpClient) { }

  getTipData()
  {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2019');
  }
}
