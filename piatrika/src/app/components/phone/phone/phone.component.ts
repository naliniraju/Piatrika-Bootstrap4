import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from 'src/app/models/phone';
import { PhoneService } from 'src/app/services/phone/phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {


  phone = new Phone();
  submitted = false;
  message: string;
  phones: Phone[];

  constructor(private phoneService: PhoneService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getPhoneDetails();

  }

  getPhoneDetails() {
    return this.phoneService.getPhoneDetails()
      .subscribe(
        phones => {
          console.log(phones);
          this.phones = phones
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.phoneService.deletePhoneDetail(id)
        .subscribe(result => {
          this.message = "Phone deleted Successfully!"
          // console.log(result);
          this.getPhoneDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('phone/add');
  }
}

