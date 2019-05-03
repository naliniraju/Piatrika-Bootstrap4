import { Injectable } from '@angular/core';
import { ApplicationTreatment } from 'src/app/models/application-treatment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApplicationTreatmentService {

  applicationtreatment:ApplicationTreatment = new ApplicationTreatment();
  submitted = false;
  applicationtreatments: ApplicationTreatment[];
  private piatrikaUrl = 'http://localhost:3000/applicationtreatments';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getApplicationTreatmentDetails (): Observable<ApplicationTreatment[]> {
    return this.http.get<ApplicationTreatment[]>(`${this.piatrikaUrl}/`)
  }

  getApplicationTreatmentDetail(id: number): Observable<ApplicationTreatment> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<ApplicationTreatment>(url);
  }

  addApplicationTreatmentDetail (applicationtreatmentDetail: ApplicationTreatment): Observable<ApplicationTreatment> {
    return this.http.post<ApplicationTreatment>(`${this.piatrikaUrl}/`, applicationtreatmentDetail, httpOptions);
  }
  deleteApplicationTreatmentDetail (applicationtreatment: ApplicationTreatment | number): Observable<ApplicationTreatment> {
    const id = typeof applicationtreatment === 'number' ? applicationtreatment : applicationtreatment.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<ApplicationTreatment>(url, httpOptions);
  }
  updateApplicationTreatmentDetail (applicationtreatment: ApplicationTreatment|number): Observable<number> {
    const id = typeof applicationtreatment === 'number' ? applicationtreatment : applicationtreatment.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, applicationtreatment,httpOptions);
  }

}
