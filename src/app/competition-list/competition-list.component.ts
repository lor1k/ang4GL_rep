import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ICompetitions } from '../competitions';
import { CompetitionsService } from '../competitions.service';
import { CompetitionComponent } from '../competition/competition.component';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent {

  @ViewChild('competitionsList', { read: ViewContainerRef, static: false })  entry: ViewContainerRef;
  // componentRef: ComponentRef<CompetitionComponent>;

  private _url = 'http://api.football-data.org/v2/competitions';
  private competitions: ICompetitions;

  get Competitions() {
    return this.competitions;
  }

  constructor(private resolver: ComponentFactoryResolver, private competitionsService: CompetitionsService) {
    competitionsService.httpGetCompetitions().then((data) => {
      this.competitions = data;
      for (const c of this.competitions.competitions) {
        this.addCompetition(c);
      }
    });
    // let that = this;
    // (async function(){
    //   let headers: HttpHeaders = new HttpHeaders().set('X-Auth-Token', '820457541e5c4c82826e7c43ea37015a');

    //   let data = await that.http.get(that._url, { headers }).toPromise();

    //   that.competitions = <ICompetitions>data;
      // for(let c of this.competitions.competitions){
      //   this.addCompetition(c);
      // }
    // })();
  }
  addCompetition(c) {
    const factory = this.resolver.resolveComponentFactory(CompetitionComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.competition = c;
  }

}
