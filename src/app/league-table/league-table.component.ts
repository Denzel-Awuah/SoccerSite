import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {config} from '../../../config.js';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./../app.component.css']
})
export class LeagueTableComponent implements OnInit {


  leagueData: Object;

  constructor(private router: Router) {}

  onTeamSelection(theteam){
    this.router.navigate(['/profile',theteam.team_id]);
  }

  ngOnInit(): void {


    //Get the League Table Data from API
      fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/524", config)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.leagueData = data.api.standings[0];
    })
    .catch(err => {
      console.log(err);
    });

  }//emd init

}//end class
