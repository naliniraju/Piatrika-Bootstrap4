import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Farmer } from 'src/app/models/farmer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FarmersService {
  farmer: Farmer = new Farmer();
  submitted = false;
  farmers: Farmer[];
  
  private piatrikaUrl = 'http://localhost:3000/farmers';  // URL to web api
  constructor(
    private http: HttpClient
  ) { }

  getFarmerDetails(): Observable<Farmer[]> {
    return this.http.get<Farmer[]>(`${this.piatrikaUrl}/`)
  }

  getFarmerDetail(id: number): Observable<Farmer> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Farmer>(url);
  }
  
  addFarmerDetail(farmerDetail: Farmer): Observable<Farmer> {
    return this.http.post<Farmer>(`${this.piatrikaUrl}/`, farmerDetail, httpOptions);
  }
  deleteFarmerDetail(farmer: Farmer | number): Observable<Farmer> {
    const id = typeof farmer === 'number' ? farmer : farmer.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Farmer>(url, httpOptions);
  }
  updateFarmerDetail(farmer: Farmer | number): Observable<number> {
    const id = typeof farmer === 'number' ? farmer : farmer.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, farmer, httpOptions);
  }

}
