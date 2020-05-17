import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeamDataService {

  constructor(private http: HttpClient) { }

  getTeamData()
  {
    return this.http.get('https://api.squiggle.com.au/?q=teams');
  }
}
