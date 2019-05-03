import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person=new Person();
  submitted = false;
  message: string;
  persons: Person[];

 constructor(private personService:PersonService,private http: HttpClient,private router: Router) {}

 ngOnInit(): void {
   this.getPersonDetails();
    
 }

 getPersonDetails() {
   return this.personService.getPersonDetails()
              .subscribe(
                persons => {
                 console.log(persons);
                 this.persons = persons
                }
               );
              }
              delete(id:number) {
                this.submitted = true;
                let r = confirm("Are you sure you want to delete...?");
                if (r == true) {
                this.personService.deletePersonDetail(id)
                    .subscribe(result =>{
                     this.message = "Person deleted Successfully!"
                     // console.log(result);
                      this.getPersonDetails();
                    },  error => console.log(error));
                    
                               }
                             }
                             goBack(){
                              this.router.navigateByUrl('person/add');
                            }

}



