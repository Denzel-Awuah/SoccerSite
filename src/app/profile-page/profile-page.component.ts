import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {config} from '../../../config.js';

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
        fetch("https://api-football-v1.p.rapidapi.com/v2/teams/team/"+ id, config)
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
