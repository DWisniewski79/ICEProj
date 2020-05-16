import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompleteGameResultsService {

  constructor(private http: HttpClient) { }

  getCompleteGameResult()
  {
    return this.http.get('https://api.squiggle.com.au/?q=games;complete=100');
}
}
