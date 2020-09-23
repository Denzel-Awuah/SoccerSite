import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopscorersComponent } from './topscorers/topscorers.component';
import { PreviousFixturesComponent } from './previous-fixtures/previous-fixtures.component';
import { UpcomingFixturesComponent } from './upcoming-fixtures/upcoming-fixtures.component';
import { LeagueTableComponent } from './league-table/league-table.component';

const routes: Routes = [
    
    { path: 'topscorer', component: TopscorersComponent },
    { path: 'leaguetable', component: LeagueTableComponent },
    { path: 'matches', component: PreviousFixturesComponent},
    { path: '', component: AppComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class appRoutingModule {}