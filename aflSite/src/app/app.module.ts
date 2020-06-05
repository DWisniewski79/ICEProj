import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD


import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
=======
import { TeamStatsComponent } from './team-stats/team-stats.component';
import{CompleteGameResultsService} from './complete-game-results.service';
import{HttpClientModule} from '@angular/common/http';
import { OddsComponent } from './odds/odds.component'
@NgModule({
  declarations: [
    AppComponent,
    TeamStatsComponent,
    OddsComponent
>>>>>>> 67d638695756e4705f46d026ef20f823efed2e3b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    RouterModule.forRoot([
      { },
    ])
=======
    HttpClientModule
>>>>>>> 67d638695756e4705f46d026ef20f823efed2e3b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
