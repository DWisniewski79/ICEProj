import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import{CompleteGameResultsService} from './complete-game-results.service';
import{HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    TeamStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CompleteGameResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
