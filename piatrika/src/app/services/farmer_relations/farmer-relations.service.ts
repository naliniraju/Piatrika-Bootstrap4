import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FarmerRelation } from 'src/app/models/farmer-relation';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FarmerRelationsService {
  farmerrelation:FarmerRelation = new FarmerRelation();
  submitted = false;
  farmerrelations: FarmerRelation[];
  private piatrikaUrl = 'http://localhost:3000/farmerrelations';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getFarmerRelationDetails (): Observable<FarmerRelation[]> {
    return this.http.get<FarmerRelation[]>(`${this.piatrikaUrl}/`)
  }

  getFarmerRelationDetail(id: number): Observable<FarmerRelation> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<FarmerRelation>(url);
  }

  addFarmerRelationDetail (farmerrelationDetail: FarmerRelation): Observable<FarmerRelation> {
    return this.http.post<FarmerRelation>(`${this.piatrikaUrl}/`, farmerrelationDetail, httpOptions);
  }
  deleteFarmerRelationDetail (farmerrelation: FarmerRelation | number): Observable<FarmerRelation> {
    const id = typeof farmerrelation === 'number' ? farmerrelation : farmerrelation.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<FarmerRelation>(url, httpOptions);
  }
  updateFarmerRelationDetail (farmerrelation: FarmerRelation|number): Observable<number> {
    const id = typeof farmerrelation === 'number' ? farmerrelation : farmerrelation.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, farmerrelation,httpOptions);
  }

}