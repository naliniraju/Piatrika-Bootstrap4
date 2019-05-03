import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bank } from 'src/app/models/bank';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class BankService {

  mybank:Bank = new Bank();
  submitted = false;
  banks: Bank[];
  private piatrikaUrl = 'http://localhost:3000/banks';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getBankDetails (): Observable<Bank[]> {
    return this.http.get<Bank[]>(`${this.piatrikaUrl}/`)
  }

  getBankDetail(id: number): Observable<Bank> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Bank>(url);
  }

  addBankDetail (bankDetail: Bank): Observable<Bank> {
    return this.http.post<Bank>(`${this.piatrikaUrl}/`, bankDetail, httpOptions);
  }
  deleteBankDetail (bank: Bank | number): Observable<Bank> {
    const id = typeof bank === 'number' ? bank : bank.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Bank>(url, httpOptions);
  }
  updateBankDetail (bank: Bank|number): Observable<number> {
    const id = typeof bank === 'number' ? bank : bank.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, bank,httpOptions);
  }

}