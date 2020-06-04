import {Component, OnInit} from '@angular/core';
import {LadderDataService} from '../ladder-data.service';
import {ladder} from '../ladder';
import { componentFactoryName } from '@angular/compiler';
import { TeamDataService } from '../team-data.service';

@Component({
    selector: 'app-team_ladder',
    templateUrl: './team_ladder.component.html',
    styleUrls: ['./team_ladder.component.css']
})

export class Team_LadderComponent implements OnInit {
    ladder: ladder[];
    selectedLadder: ladder;
    

    constructor(private t_ladderDataService: TeamDataService) {}

    ngOnInit()
    {
        this.getSelectedLadder();

    }

    

    getSelectedLadder(): void{
        this.t_ladderDataService.getLadder().subscribe(temp => {this.ladder = temp;});
    }

    /* onSelect(team: ladder) : void{
        this.selectedLadder = Ladder;
    }*/
}