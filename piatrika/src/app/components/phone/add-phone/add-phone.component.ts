import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/models/phone';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person/person.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PhoneService } from 'src/app/services/phone/phone.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {


  phone: Phone = new Phone();
  submitted = false;
  phones: Phone[];
  persons: Person[];
  

  constructor(
    private phoneService: PhoneService,
    private personService: PersonService,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.personService.getPersonDetails().subscribe(data=>this.persons=data);
  };

  newPhone(): void {
    this.submitted = false;
    this.phone = new Phone();
  }

  addPhoneDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.phone);

    this.phoneService.addPhoneDetail(this.phone)
      .subscribe();
    this.getPhoneDetails();
    //this.location.back();
    this.router.navigateByUrl('/phones');
  }

  getPhoneDetails() {
    return this.phoneService.getPhoneDetails()
      .subscribe(
        phones => {
          console.log(phones);
          this.phones = phones;
        }
      );
  }

}

