import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  //Stores api results
  teamsData: Object;
  

  constructor(private router : Router) { }

  onTeamSelection(teamid){
    this.router.navigate(['/profile',teamid.team_id]);
  }


  ngOnInit(): void {



    //Getting Teams Data from the API 
    fetch("https://api-football-v1.p.rapidapi.com/v2/teams/league/524", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "01217d9c47msha27496e5b78af28p1bca54jsnb9d860de87bc"
	}
})
.then(response => response.json())
    .then(data => {
      console.log(data);
      this.teamsData = data.api.teams;
    })
    .catch(err => {
      console.log(err);
    });

  }

}
