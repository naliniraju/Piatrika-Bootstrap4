import { Injectable } from '@angular/core';
import { Season } from 'src/app/models/season';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  season:Season = new Season();
  submitted = false;
  seasons: Season[];
  private piatrikaUrl = 'http://localhost:3000/seasons';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getSeasonDetails (): Observable<Season[]> {
    return this.http.get<Season[]>(`${this.piatrikaUrl}/`)
  }

  getSeasonDetail(id: number): Observable<Season> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Season>(url);
  }

  addSeasonDetail (seasonDetail: Season): Observable<Season> {
    return this.http.post<Season>(`${this.piatrikaUrl}/`, seasonDetail, httpOptions);
  }
  deleteSeasonDetail (season: Season | number): Observable<Season> {
    const id = typeof season === 'number' ? season : season.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Season>(url, httpOptions);
  }
  updateSeasonDetail (season: Season|number): Observable<number> {
    const id = typeof season === 'number' ? season : season.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, season,httpOptions);
  }

}
