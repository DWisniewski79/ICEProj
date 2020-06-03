import { Component, OnInit } from '@angular/core';
import {Tips} from '../tips'
import {TipDataService} from '../tip-data.service'

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {

  tips: Tips[];
  roundSelect: number = 1;
  constructor(private tipsService: TipDataService) { }

  ngOnInit(): void {
    this.getTips();
    console.log(this.tips);
    console.log("is this working?");
  }


  getTips(): void{
    this.tipsService.getTipData().subscribe(temp => {this.tips = temp
      
      var tempArr = [];


      temp.forEach(element => {
        if(element.round == this.roundSelect) tempArr.push(element);

      });


      this.tips = tempArr;

    });
  }


  setRound(x): void
  {
    console.log("the selected value is " + x);
    this.roundSelect = x;
    this.getTips();
    console.log(this.roundSelect);
  }

}
