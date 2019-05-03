import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Guarantor } from 'src/app/models/guarantor';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GuarantorService {

  guarantor:Guarantor = new Guarantor();
  submitted = false;
  guarantors: Guarantor[];
  private piatrikaUrl = 'http://localhost:3000/guarantors';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getGuarantorDetails (): Observable<Guarantor[]> {
    return this.http.get<Guarantor[]>(`${this.piatrikaUrl}/`)
  }

  getGuarantorDetail(id: number): Observable<Guarantor> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Guarantor>(url);
  }

  addGuarantorDetail (guarantorDetail: Guarantor): Observable<Guarantor> {
    return this.http.post<Guarantor>(`${this.piatrikaUrl}/`, guarantorDetail, httpOptions);
  }
  deleteGuarantorDetail (guarantor: Guarantor | number): Observable<Guarantor> {
    const id = typeof guarantor === 'number' ? guarantor : guarantor.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Guarantor>(url, httpOptions);
  }
  updateGuarantorDetail (guarantor: Guarantor|number): Observable<number> {
    const id = typeof guarantor === 'number' ? guarantor : guarantor.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, guarantor,httpOptions);
  }

}
