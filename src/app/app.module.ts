import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { CompetitionsServiceComponent } from './competitions-service/competitions-service.component';
import { CompetitionComponent } from './competition/competition.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionListComponent,
    CompetitionsServiceComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CompetitionComponent
 ],
 entryComponents: [
  CompetitionComponent
 ]   
})
export class AppModule { }
