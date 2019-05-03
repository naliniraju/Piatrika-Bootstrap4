import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crop } from 'src/app/models/crop';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CropService {


  crop:Crop = new Crop();
  submitted = false;
  crops: Crop[];
  private piatrikaUrl = 'http://localhost:3000/crops';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getCropDetails (): Observable<Crop[]> {
    return this.http.get<Crop[]>(`${this.piatrikaUrl}/`)
  }

  getCropDetail(id: number): Observable<Crop> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Crop>(url);
  }

  addCropDetail (cropDetail: Crop): Observable<Crop> {
    return this.http.post<Crop>(`${this.piatrikaUrl}/`, cropDetail, httpOptions);
  }
  deleteCropDetail (crop: Crop | number): Observable<Crop> {
    const id = typeof crop === 'number' ? crop : crop.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Crop>(url, httpOptions);
  }
  updateCropDetail (crop: Crop|number): Observable<number> {
    const id = typeof crop === 'number' ? crop : crop.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, crop,httpOptions);
  }

}
