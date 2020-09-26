import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config} from '../../../config.js';

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
  fetch("https://api-football-v1.p.rapidapi.com/v2/topscorers/524", config)
.then(response => response.json())
.then(data => {
  this.scorersdata = data.api.topscorers;
})
.catch(err => {
	console.log(err);
});

}//end init




}//end class
