import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
=======
<<<<<<< HEAD
import {ladder} from './ladder';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
=======
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
>>>>>>> 67d638695756e4705f46d026ef20f823efed2e3b
>>>>>>> ef4a5213502d44e7947955bce29a429e283b6afc

@Injectable({
  providedIn: 'root'
})
export class LadderDataService {

  constructor(private http: HttpClient) { }

  getLadder():Observable<ladder[]>
  {
<<<<<<< HEAD
    return this.http.get('https://api.squiggle.com.au/?q=standings;year=2019;round=19');
=======
    return this.http.get<ladder[]>('https://api.squiggle.com.au/?q=standings;year=2019;round=20').pipe(
      map((data: any) => data.ladder.map((item: any) => new ladder(
        item.played,
        item.pts,
        item.goals_against,
        item.wins,
        item.behinds_for,
        item.aginst,
        item.losses,
        item.name,
        item.id,
        item.draws,
        item.for,
        item.goals_for,
        item.rank,
        item.behinds_against,
        item.percentage
      )))
    );
>>>>>>> ef4a5213502d44e7947955bce29a429e283b6afc
  }
}
