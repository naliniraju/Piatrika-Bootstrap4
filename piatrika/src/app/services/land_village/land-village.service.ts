import { Injectable } from '@angular/core';
import { LandVillage } from 'src/app/models/land-village';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LandVillageService {
  landvillage:LandVillage = new LandVillage();
  submitted = false;
  landvillages: LandVillage[];
  private piatrikaUrl = 'http://localhost:3000/landvillages';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getLandVillageDetails (): Observable<LandVillage[]> {
    return this.http.get<LandVillage[]>(`${this.piatrikaUrl}/`)
  }

  getLandVillageDetail(id: number): Observable<LandVillage> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<LandVillage>(url);
  }

  addLandVillageDetail (landvillageDetail: LandVillage): Observable<LandVillage> {
    return this.http.post<LandVillage>(`${this.piatrikaUrl}/`, landvillageDetail, httpOptions);
  }
  deleteLandVillageDetail (landvillage: LandVillage | number): Observable<LandVillage> {
    const id = typeof landvillage === 'number' ? landvillage : landvillage.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<LandVillage>(url, httpOptions);
  }
  updateLandVillageDetail (landvillage: LandVillage|number): Observable<number> {
    const id = typeof landvillage === 'number' ? landvillage : landvillage.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, landvillage,httpOptions);
  }

}