import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  teamInfo: Object;
  @Input() teamid: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    //Get API info
        fetch("https://api-football-v1.p.rapidapi.com/v2/teams/team/"+ id, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "01217d9c47msha27496e5b78af28p1bca54jsnb9d860de87bc"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.teamInfo = data.api.teams;
    })
    .catch(err => {
      console.log(err);
    });


  }

}
