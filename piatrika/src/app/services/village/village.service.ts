import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Village } from 'src/app/models/village';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class VillageService {

  village:Village = new Village();
  submitted = false;
  villages: Village[];
  private piatrikaUrl = 'http://localhost:3000/villages';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getVillageDetails (): Observable<Village[]> {
    return this.http.get<Village[]>(`${this.piatrikaUrl}/`)
  }

  getVillageDetail(id: number): Observable<Village> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Village>(url);
  }

  addVillageDetail (villageDetail: Village): Observable<Village> {
    return this.http.post<Village>(`${this.piatrikaUrl}/`, villageDetail, httpOptions);
  }
  deleteVillageDetail (village: Village | number): Observable<Village> {
    const id = typeof village === 'number' ? village : village.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Village>(url, httpOptions);
  }
  updateVillageDetail (village: Village|number): Observable<number> {
    const id = typeof village === 'number' ? village : village.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, village,httpOptions);
  }

}