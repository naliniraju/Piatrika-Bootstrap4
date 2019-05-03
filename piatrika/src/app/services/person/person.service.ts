import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from 'src/app/models/person';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  person:Person = new Person();
  submitted = false;
  persons: Person[];
  private piatrikaUrl = 'http://localhost:3000/persons';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getPersonDetails (): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.piatrikaUrl}/`)
  }

  getPersonDetail(id: number): Observable<Person> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Person>(url);
  }

  addPersonDetail (personDetail: Person): Observable<Person> {
    return this.http.post<Person>(`${this.piatrikaUrl}/`, personDetail, httpOptions);
  }
  deletePersonDetail (person: Person | number): Observable<Person> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Person>(url, httpOptions);
  }
  updatePersonDetail (person: Person|number): Observable<number> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, person,httpOptions);
  }

}
