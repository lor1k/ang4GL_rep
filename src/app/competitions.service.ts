import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICompetitions } from './competitions';
import { IMatches } from './matches';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  private competitions: ICompetitions;
  private headers: HttpHeaders = new HttpHeaders().set('X-Auth-Token', '820457541e5c4c82826e7c43ea37015a');
  private _url = 'http://api.football-data.org/v2/competitions';
  constructor(private http: HttpClient) {  }

  async httpGetCompetitions() {
    const headers = this.headers;
    const data = await this.http.get(this._url, { headers }).toPromise();
    this.competitions = data as ICompetitions;
    return this.competitions;
  }
  async getMatches(id) {
    const headers = this.headers;
    try {
      // http://api.football-data.org/v2/competitions/2003/matches?matchday=1
      const data = await this.http.get('http://api.football-data.org/v2/competitions/' + id + '/matches', { headers }).toPromise();

      return  data as IMatches;
  } catch (error) {
    return false;
  }
  }
  getCompetitions(): ICompetitions {
    return this.competitions;
  }
}
