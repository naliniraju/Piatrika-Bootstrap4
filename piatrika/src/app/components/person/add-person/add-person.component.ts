import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person/person.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person: Person = new Person();
  submitted = false;
  persons: Person[];

  constructor(
    private personService: PersonService,
    private router: Router,
    private location:Location
  ) { }
  ngOnInit() {

  }
  newPerson(): void {
    this.submitted = false;
    this.person = new Person();
  }

  addPersonDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.person);
    this.personService.addPersonDetail(this.person)
      .subscribe();
    this.getPersonDetails();
    this.router.navigate(['/persons']);
    //this.location.back();
  }

  getPersonDetails() {
    return this.personService.getPersonDetails()
      .subscribe(
        persons => {
          console.log(persons);
          this.persons = persons;
        }
      );
  }

}
