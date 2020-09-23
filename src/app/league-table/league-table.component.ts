import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./../app.component.css']
})
export class LeagueTableComponent implements OnInit {


  leagueData: Object;

  constructor(private router: Router) {}

  ngOnInit(): void {


    //Get the League Table Data from API
      fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/524", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "01217d9c47msha27496e5b78af28p1bca54jsnb9d860de87bc"
	}
    })
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
