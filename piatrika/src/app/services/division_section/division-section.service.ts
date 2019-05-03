import { Injectable } from '@angular/core';
import { DivisionModel } from 'src/app/models/division-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DivisionSectionService {

  divisionmodel:DivisionModel = new DivisionModel();
  submitted = false;
  divisionmodels: DivisionModel[];
  private piatrikaUrl = 'http://localhost:3000/divisionmodels';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getDivisionDetails (): Observable<DivisionModel[]> {
    return this.http.get<DivisionModel[]>(`${this.piatrikaUrl}/`)
  }

  getDivisionDetail(id: number): Observable<DivisionModel> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<DivisionModel>(url);
  }

  addDivisionDetail (divisionmodelDetail: DivisionModel): Observable<DivisionModel> {
    return this.http.post<DivisionModel>(`${this.piatrikaUrl}/`, divisionmodelDetail, httpOptions);
  }
  deleteDivisionDetail (divisionmodel: DivisionModel | number): Observable<DivisionModel> {
    const id = typeof divisionmodel === 'number' ? divisionmodel : divisionmodel.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<DivisionModel>(url, httpOptions);
  }
  updateDivisionDetail (divisionmodel: DivisionModel|number): Observable<number> {
    const id = typeof divisionmodel === 'number' ? divisionmodel : divisionmodel.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, divisionmodel,httpOptions);
  }

}