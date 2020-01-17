import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { ICompetitions, ICompetition} from './competitions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _url: string = 'http://api.football-data.org/v2/competitions'
  private competitions: ICompetitions;
  constructor(private http: HttpClient){
    
    }
  getGames(){
    let headers: HttpHeaders = new HttpHeaders().set('X-Auth-Token', '820457541e5c4c82826e7c43ea37015a');

    this.http.get(this._url, { headers }).toPromise().then(data => {
      console.log(data);
      this.competitions = <ICompetitions>data;
      }
    );
  }
  }

