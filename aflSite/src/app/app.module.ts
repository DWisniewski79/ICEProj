import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import{CompleteGameResultsService} from './complete-game-results.service';
import{HttpClientModule} from '@angular/common/http';
import { OddsComponent } from './odds/odds.component'
@NgModule({
  declarations: [
    AppComponent,
    TeamStatsComponent,
    OddsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
