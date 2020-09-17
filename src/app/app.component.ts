import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'SoccerSite';
  constructor(){
      //Top scorcers section

    }


  getScorers(){
    fetch("https://api-football-v1.p.rapidapi.com/v2/topscorers/4", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": "01217d9c47msha27496e5b78af28p1bca54jsnb9d860de87bc",
    'Content-Type': 'application/json'
	}
})
.then(response => {
	console.log(response.json());
})
.catch(err => {
	console.log(err);
});

  }

  



}
