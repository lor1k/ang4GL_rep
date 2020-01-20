import { Component, Input } from '@angular/core';
import { ICompetition } from '../competitions';
import { HttpClient } from '@angular/common/http';
import { CompetitionsService } from '../competitions.service';
import { IMatches } from '../matches';
@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent/*implements ICompetition*/ {
  @Input() competition: ICompetition;
  gamesAreVisible = false;
  moreAboutCompetition: ICompetition;
  available: boolean;
  matches: IMatches;


  toggleGamesAreVisible() {
    if (this.matches == undefined) {
      // this.getGames();
      this.competitionsService.getMatches(this.competition.id).then((data) => {
        if (data == false) {
          this.available = false;
        } else {
          this.available = true;
          this.matches = data as IMatches;
        }

      });
      console.log('Requested');
    }

    this.gamesAreVisible = !this.gamesAreVisible;
  }
  constructor(private http: HttpClient,  private competitionsService: CompetitionsService/*c:ICompetition*/) {
    // this.id = c.id;
    // this.area = c.area;
    // this.name = c.name;
    // this.code = c.code;
    // this.emblemUrl = c.emblemUrl;
    // this.plan = c.plan;
    // this.currentSeason = c.currentSeason;
    // this.numberOfAvailableSeasons = c.numberOfAvailableSeasons;
    // this.lastUpdated = c.lastUpdated;
  }
}
