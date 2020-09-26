import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import {config} from '../../../config.js';

@Component({
  selector: 'app-previous-fixtures',
  templateUrl: './previous-fixtures.component.html',
  styleUrls: ['./../app.component.css']
})
export class PreviousFixturesComponent implements OnInit {


  PreviousFixtures;

  constructor(private router : Router) { }

  onTeamSelection(matchGame){
    this.router.navigate(['/profile',matchGame.homeTeam.team_id]);
  }

  onTeamSelectionAway(matchGame){
    this.router.navigate(['/profile',matchGame.awayTeam.team_id]);
  }

  ngOnInit(): void {

    
    
    //Get the Previous Fixtures from API
    fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/last/5", config)
    .then(response => response.json())
    .then(data => {
      this.PreviousFixtures = data.api.fixtures;
      this.PreviousFixtures.forEach(function(value) {
        //Edits to the data and referee
        value.event_date = value.event_date.slice(0,10);
        value.referee = value.referee.slice(0,-9);
      });
    })
    .catch(err => {
      console.log(err);
    });

  }

}
