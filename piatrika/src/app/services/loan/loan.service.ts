import { Injectable } from '@angular/core';
import { Loan } from 'src/app/models/loan';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  loan:Loan = new Loan();
  submitted = false;
  loans: Loan[];
  private piatrikaUrl = 'http://localhost:3000/loans';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getLoanDetails (): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.piatrikaUrl}/`)
  }

  getLoanDetail(id: number): Observable<Loan> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Loan>(url);
  }

  addLoanDetail (loanDetail: Loan): Observable<Loan> {
    return this.http.post<Loan>(`${this.piatrikaUrl}/`, loanDetail, httpOptions);
  }
  deleteLoanDetail (loan: Loan | number): Observable<Loan> {
    const id = typeof loan === 'number' ? loan : loan.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Loan>(url, httpOptions);
  }
  updateLoanDetail (loan: Loan|number): Observable<number> {
    const id = typeof loan === 'number' ? loan : loan.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, loan,httpOptions);
  }

}