import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Tips } from '../tips'
import { TipDataService } from '../tip-data.service'
=======
import {Tips} from '../tips'
import {TipDataService} from '../tip-data.service'
>>>>>>> ef4a5213502d44e7947955bce29a429e283b6afc

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {

  tips: Tips[];
  roundSelect: number = 1;
  sourceSelect: string = "Squiggle";
  constructor(private tipsService: TipDataService) { }

  ngOnInit(): void {
    this.getTips();
    console.log(this.tips);
    console.log("is this working?");
  }


<<<<<<< HEAD
  getTips(): void {
    this.tipsService.getTipData().subscribe(temp => {
    this.tips = temp

=======
  getTips(): void{
    this.tipsService.getTipData().subscribe(temp => {this.tips = temp
      
>>>>>>> ef4a5213502d44e7947955bce29a429e283b6afc
      var tempArr = [];


      temp.forEach(element => {
<<<<<<< HEAD
        if (element.source == this.sourceSelect && element.round == this.roundSelect) tempArr.push(element);


=======
        if(element.source == this.sourceSelect && element.round == this.roundSelect) tempArr.push(element);

                      
>>>>>>> ef4a5213502d44e7947955bce29a429e283b6afc
      });


      this.tips = tempArr;

    });
  }


<<<<<<< HEAD
  setRound(x): void {
=======
  setRound(x): void
  {
>>>>>>> ef4a5213502d44e7947955bce29a429e283b6afc
    console.log("the selected value is " + x);
    this.roundSelect = x;
    this.getTips();
    console.log(this.roundSelect);
  }

<<<<<<< HEAD
  setSource(x): void {
=======
  setSource(x): void{
>>>>>>> ef4a5213502d44e7947955bce29a429e283b6afc
    console.log("the selected value is " + x);
    this.sourceSelect = x;
    this.getTips();
    console.log(this.sourceSelect);
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> ef4a5213502d44e7947955bce29a429e283b6afc
