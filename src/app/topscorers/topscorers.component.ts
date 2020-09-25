import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topscorers',
  templateUrl: './topscorers.component.html',
  styleUrls: ['./topscorers.component.css'],
  inputs: ['scorersdata']
})
export class TopscorersComponent implements OnInit {

  //Contains Top Scorers Data from API
  scorersdata: Object;
 

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
      

    //USE THIS
  fetch("https://api-football-v1.p.rapidapi.com/v2/topscorers/524", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "01217d9c47msha27496e5b78af28p1bca54jsnb9d860de87bc"
	}
})
.then(response => response.json())
.then(data => {
  this.scorersdata = data.api.topscorers;
})
.catch(err => {
	console.log(err);
});

}//end init




}//end class
