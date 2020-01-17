import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ICompetition } from '../competitions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent/*implements ICompetition*/ {  
  @Input() competition: ICompetition;
  gamesAreVisible: boolean = false;
  moreAboutCompetition:ICompetition;
  available:string;

  getGames(){
    let headers: HttpHeaders = new HttpHeaders().set('X-Auth-Token', '820457541e5c4c82826e7c43ea37015a');
    this.http.get('http://api.football-data.org/v2/competitions/' + this.competition.id, { headers }).toPromise().then(data => {
        console.log(data);
        this.available = "true";
        this.moreAboutCompetition = <ICompetition>data;
        }
      ).catch(error => {
        this.available ="false";
      });
  }
  toggleGamesAreVisible(){
    if(this.moreAboutCompetition == undefined){
      this.getGames();
      console.log("Requested");
    }
    
    this.gamesAreVisible = !this.gamesAreVisible;
  }
  constructor(private http: HttpClient/*c:ICompetition*/) { 
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
