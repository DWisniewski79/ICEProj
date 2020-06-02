import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { TeamDataService } from '../team-data.service';
=======
>>>>>>> 7d5b55dee4f90d5a51f3718036991fd4ff180bff

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

<<<<<<< HEAD
  teams: any = [];
  constructor(private tDataService: TeamDataService) { }


  ngOnInit() {
    this.tDataService.getTeam().subscribe(response => {
      for (var i = 0; i < response['teams'].length; i++) {
        this.teams = response['teams']
        // console.log(this.teams['name'])
      }
    })
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 7d5b55dee4f90d5a51f3718036991fd4ff180bff
  }
}
