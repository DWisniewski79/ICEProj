import { Component, OnInit } from '@angular/core';
import { TeamDataService } from '../team-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  teams: any = [];
  //
  completed: any=[];
//
  constructor(private tDataService: TeamDataService) { }


  ngOnInit() {
    this.tDataService.getTeam().subscribe(response => {
      for (var i = 0; i < response['teams'].length; i++) {
        this.teams = response['teams']
        // console.log(this.teams['name'])
      }
    })
  }

  // ***************************************
  

  
  //************************************ 
}
