import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-fixtures',
  templateUrl: './previous-fixtures.component.html',
  styleUrls: ['./../app.component.css']
})
export class PreviousFixturesComponent implements OnInit {


  PreviousFixtures;

  constructor() { }

  ngOnInit(): void {

    //Get the Previous Fixtures from API
    // fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/last/5", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //     "x-rapidapi-key": "01217d9c47msha27496e5b78af28p1bca54jsnb9d860de87bc"
    //   }
    // })
    
    fetch("./../../assets/datafixtures.json")
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
