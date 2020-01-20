import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { CompetitionComponent } from './competition/competition.component';
import { CompetitionsService } from './competitions.service';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionListComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CompetitionsService],
  bootstrap: [AppComponent],
  exports: [
    CompetitionComponent
 ],
 entryComponents: [
  CompetitionComponent
 ]
})
export class AppModule { }
