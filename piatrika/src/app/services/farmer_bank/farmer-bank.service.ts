import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FarmerBank } from 'src/app/models/farmer-bank';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FarmerBankService {

 farmerbank:FarmerBank = new FarmerBank();
  submitted = false;
  farmerbanks: FarmerBank[];
  private piatrikaUrl = 'http://localhost:3000/farmerbanks';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getFarmerBankDetails (): Observable<FarmerBank[]> {
    return this.http.get<FarmerBank[]>(`${this.piatrikaUrl}/`)
  }

  getFarmerBankDetail(id: number): Observable<FarmerBank> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<FarmerBank>(url);
  }

  addFarmerBankDetail (farmerbankDetail: FarmerBank): Observable<FarmerBank> {
    return this.http.post<FarmerBank>(`${this.piatrikaUrl}/`, farmerbankDetail, httpOptions);
  }
  deleteFarmerBankDetail (farmerbank: FarmerBank | number): Observable<FarmerBank> {
    const id = typeof farmerbank === 'number' ? farmerbank : farmerbank.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<FarmerBank>(url, httpOptions);
  }
  updateFarmerBankDetail (farmerbank: FarmerBank|number): Observable<number> {
    const id = typeof farmerbank === 'number' ? farmerbank : farmerbank.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, farmerbank,httpOptions);
  }

}
