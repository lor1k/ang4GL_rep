import { Component, OnInit } from '@angular/core';
import { ICompetitions } from '../competitions';
import { CompetitionsServiceComponent } from '../competitions-service/competitions-service.component';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  public competitions: ICompetitions;

  constructor(private competitionService: CompetitionsServiceComponent) {
    this.competitions = competitionService.Competitions;
   }

  ngOnInit() {
    console.log("COMPETITIONS LIST");
  }

}
