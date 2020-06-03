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

  roundSelect: number=1;  
  win:number= 0;
  loss:number = 0;
  
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
  
    var favTeamID = 2;
    var lastFive = this.roundSelect-5;
    // 
    temp.forEach(element=>{
      if(favTeamID == element.winnerteamid )
      {
         this.win++;
      }
      else if(favTeamID != element.winnerteamid && (element.hteamid == favTeamID)||(element.ateamid == favTeamID)) this.loss++;
    }); //Using hteam as we have not yet developed the fav team funcitonaity
    //  
    temp.forEach(element => {
      if(element.round == this.roundSelect) tempArr.push(element);
    });



    this.games = tempArr;
    console.log(this.games);
    console.log(this.win);
    console.log(this.loss);
  
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
