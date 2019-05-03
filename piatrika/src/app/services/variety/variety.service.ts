import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Variety } from 'src/app/models/variety';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class VarietyService {

  varietee:Variety = new Variety();
  submitted = false;
  varietees: Variety[];
  private piatrikaUrl = 'http://localhost:3000/varietees';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getVarietyDetails (): Observable<Variety[]> {
    return this.http.get<Variety[]>(`${this.piatrikaUrl}/`)
  }

  getVarietyDetail(id: number): Observable<Variety> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Variety>(url);
  }

  addVarietyDetail (varieteeDetail: Variety): Observable<Variety> {
    return this.http.post<Variety>(`${this.piatrikaUrl}/`, varieteeDetail, httpOptions);
  }
  deleteVarietyDetail (varietee: Variety | number): Observable<Variety> {
    const id = typeof varietee === 'number' ? varietee : varietee.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Variety>(url, httpOptions);
  }
  updateVarietyDetail (varietee: Variety|number): Observable<number> {
    const id = typeof varietee === 'number' ? varietee : varietee.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, varietee,httpOptions);
  }

}
