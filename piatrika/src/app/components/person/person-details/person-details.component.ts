import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person/person.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person = new Person();
  submitted = false;
  message: string;
  persons:Person[];
  constructor(
    private personService:PersonService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPersonDetail(id)
      .subscribe(person => this.person = person);

  }
//   getPersonDetails() {
//     return this.personService.getPersonDetails()
//                .subscribe(
//                  persons => {
//                   console.log(persons);
//                   this.persons = persons;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.person);
  this.submitted = true;
  this.personService.updatePersonDetail(this.person)
      .subscribe(result => this.message = "Person Updated Successfully!");
      //this.getPersonDetails();
      this.ngOnInit();
    this.location.back();

}

}
