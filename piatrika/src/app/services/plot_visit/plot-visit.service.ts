import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlotVisit } from 'src/app/models/plot-visit';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlotVisitService {
  plotvisit:PlotVisit = new PlotVisit();
  submitted = false;
  plotvisits: PlotVisit[];
  private piatrikaUrl = 'http://localhost:3000/plotvisits';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getPlotVisitDetails (): Observable<PlotVisit[]> {
    return this.http.get<PlotVisit[]>(`${this.piatrikaUrl}/`)
  }

  getPlotVisitDetail(id: number): Observable<PlotVisit> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<PlotVisit>(url);
  }

  addPlotVisitDetail (plotvisitDetail: PlotVisit): Observable<PlotVisit> {
    return this.http.post<PlotVisit>(`${this.piatrikaUrl}/`, plotvisitDetail, httpOptions);
  }
  deletePlotVisitDetail (plotvisit: PlotVisit | number): Observable<PlotVisit> {
    const id = typeof plotvisit === 'number' ? plotvisit : plotvisit.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<PlotVisit>(url, httpOptions);
  }
  updatePlotVisitDetail (plotvisit: PlotVisit|number): Observable<number> {
    const id = typeof plotvisit === 'number' ? plotvisit : plotvisit.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, plotvisit,httpOptions);
  }

}
