import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopscorersComponent } from './topscorers/topscorers.component';
import { PreviousFixturesComponent } from './previous-fixtures/previous-fixtures.component';
import { UpcomingFixturesComponent } from './upcoming-fixtures/upcoming-fixtures.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { TeamsComponent } from './teams/teams.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';


const routes: Routes = [
    
    { path: 'topscorer', component: TopscorersComponent },
    { path: 'leaguetable', component: LeagueTableComponent },
    { path: 'matches', component: PreviousFixturesComponent},
    { path: 'upcominggames', component: UpcomingFixturesComponent},
    { path: 'teams', component: TeamsComponent},
    { path: 'profile', component: ProfilePageComponent},
    { path: '', component: HomePageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class appRoutingModule {}