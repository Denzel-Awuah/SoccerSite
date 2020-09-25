import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-upcoming-fixtures',
  templateUrl: './upcoming-fixtures.component.html',
  styleUrls: ['./../app.component.css']
})
export class UpcomingFixturesComponent implements OnInit {


  UpcomingFixtures: Object;

  constructor(private router : Router) { }

  onTeamSelection(matchGame){
    this.router.navigate(['/profile',matchGame.homeTeam.team_id]);
  }

  onTeamSelectionAway(matchGame){
    this.router.navigate(['/profile',matchGame.awayTeam.team_id]);
  }


  ngOnInit(): void {
     
    
      //Get the Upcoming Fixtures from API
          fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/Regular_Season_-_3", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "01217d9c47msha27496e5b78af28p1bca54jsnb9d860de87bc"
        }
      })
      .then(response => response.json())
      .then(data => {
        this.UpcomingFixtures = data.api.fixtures;
      })
      .catch(err => {
        console.log(err);
      });


  }

}
