import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topscorers',
  templateUrl: './topscorers.component.html',
  styleUrls: ['./topscorers.component.css'],
  inputs: ['scorersdata']
})
export class TopscorersComponent implements OnInit {

 

  scorersdata: Object;
  apiSub = "api";

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
      
    // //Headers for API get request
    //   const headers = {
    //         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //         "x-rapidapi-key": "01217d9c47msha27496e5b78af28p1bca54jsnb9d860de87bc",
    //         'Content-Type': 'application/json'
    //    }
    
    //  //Get the Top Scorers Data and populate the table
    //   this.http.get<Object>("https://api-football-v1.p.rapidapi.com/v2/topscorers/524",{headers}).subscribe(data => {
    //   this.scorersdata = data;
        
    //   })



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
