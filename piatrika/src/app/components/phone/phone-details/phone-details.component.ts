import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/models/phone';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person/person.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhoneService } from 'src/app/services/phone/phone.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  
  phone = new Phone();
  submitted = false;
  message: string;
  phones:Phone[];
  persons: Person[];



  constructor(
    private phoneService:PhoneService,
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.personService.getPersonDetails().subscribe(data=>this.persons=data);

    const id = +this.route.snapshot.paramMap.get('id');
    this.phoneService.getPhoneDetail(id)
      .subscribe(phone => this.phone = phone);

  }
//   getPhoneDetails() {
//     return this.phoneService.getPhoneDetails()
//                .subscribe(
//                  phones => {
//                   console.log(phones);
//                   this.phones = phones;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.phone);
  this.submitted = true;
  this.phoneService.updatePhoneDetail(this.phone)
      .subscribe(result => this.message = "Phone Updated Successfully!");
      //this.getPhoneDetails();
      this.ngOnInit();
    this.location.back();

}

}
