import { Component, OnInit, Injectable, ComponentFactoryResolver, ComponentFactory, ViewChild, ViewContainerRef, ComponentRef, ɵComponentFactory } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ICompetitions, ICompetition} from '../competitions'
import { CompetitionComponent } from '../competition/competition.component';

@Component({
  selector: 'app-competitions-service',
  templateUrl: './competitions-service.component.html',
  styleUrls: ['./competitions-service.component.css']
})
@Injectable()
export class CompetitionsServiceComponent {
  @ViewChild('competitionsList', { read: ViewContainerRef, static: false })  entry: ViewContainerRef;
  //componentRef: ComponentRef<CompetitionComponent>;

  private _url: string = 'http://api.football-data.org/v2/competitions'
  private competitions: ICompetitions;

  get Competitions(){
    return this.competitions;
  }
  constructor(private http: HttpClient, private resolver: ComponentFactoryResolver){
    let headers: HttpHeaders = new HttpHeaders().set('X-Auth-Token', '820457541e5c4c82826e7c43ea37015a');

    this.http.get(this._url, { headers }).toPromise().then(data => {
        console.log(data);
        this.competitions = <ICompetitions>data;
        for(let c of this.competitions.competitions){
          this.addCompetition(c);
        }
        }
      );
    }
    addCompetition(c){
      const factory = this.resolver.resolveComponentFactory(CompetitionComponent);
      const componentRef = this.entry.createComponent(factory);
      componentRef.instance.competition = c;
    }
}
// get(url: string, 
//   options: 
//   { 
//     headers?: HttpHeaders | 
//       { [header: string]: string | 
//       string[]; }; 
//     observe?: HttpObserve; 
//     params?: HttpParams | 
//       { [param: string]: string | 
//       string[]; }; 
//     reportProgress?: boolean; 
//     responseType?: "arraybuffer" | "blob" | "text" | "json"; 
//     withCredentials?: boolean; 
//    } = {})