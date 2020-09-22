import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopscorersComponent } from './topscorers/topscorers.component';
import { PreviousFixturesComponent } from './previous-fixtures/previous-fixtures.component';
import { UpcomingFixturesComponent } from './upcoming-fixtures/upcoming-fixtures.component';

@NgModule({
  declarations: [
    AppComponent,
    TopscorersComponent,
    PreviousFixturesComponent,
    UpcomingFixturesComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
