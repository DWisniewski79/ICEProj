import { Component, OnInit, Input} from '@angular/core';
import{CompleteGameResultsService} from '../complete-game-results.service';
import { HttpClient} from '@angular/common/http';
import{Game} from '../game';
import { element } from 'protractor';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {

  games: Game[];

  roundSelect: number = 1;
  
  constructor(private gameService: CompleteGameResultsService) 
  {
      
  }

  ngOnInit(): void 
  {
    this.getGames();
    
  }

  getGames(): void
  {
    this.gameService.getCompleteGameResult().subscribe(temp=> {this.games = temp
    
      
    var tempArr = [];


    temp.forEach(element => {
      if(element.round == this.roundSelect) tempArr.push(element);
    });



    this.games = tempArr;
    console.log(this.games);
  
    });

  }


  setRound(x): void
  {
    console.log("the selected value is " + x);
    this.roundSelect = x;
    this.getGames();
    console.log(this.roundSelect);
  }
 

}
