import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phone } from 'src/app/models/phone';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  phone:Phone = new Phone();
  submitted = false;
  phones: Phone[];
  private piatrikaUrl = 'http://localhost:3000/phones';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getPhoneDetails (): Observable<Phone[]> {
    return this.http.get<Phone[]>(`${this.piatrikaUrl}/`)
  }

  getPhoneDetail(id: number): Observable<Phone> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Phone>(url);
  }

  addPhoneDetail (phoneDetail: Phone): Observable<Phone> {
    return this.http.post<Phone>(`${this.piatrikaUrl}/`, phoneDetail, httpOptions);
  }
  deletePhoneDetail (phone: Phone | number): Observable<Phone> {
    const id = typeof phone === 'number' ? phone : phone.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Phone>(url, httpOptions);
  }
  updatePhoneDetail (phone: Phone|number): Observable<number> {
    const id = typeof phone === 'number' ? phone : phone.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, phone,httpOptions);
  }

}
