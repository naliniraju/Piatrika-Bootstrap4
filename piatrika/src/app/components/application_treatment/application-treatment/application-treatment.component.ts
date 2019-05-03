import { Component, OnInit } from '@angular/core';
import { ApplicationTreatment } from 'src/app/models/application-treatment';
import { ApplicationTreatmentService } from 'src/app/services/application_treatment/application-treatment.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-treatment',
  templateUrl: './application-treatment.component.html',
  styleUrls: ['./application-treatment.component.css']
})
export class ApplicationTreatmentComponent implements OnInit {

  applicationtreatment = new ApplicationTreatment();
  submitted = false;
  message: string;
  applicationtreatments: ApplicationTreatment[];

  constructor(private applicationtreatmentService: ApplicationTreatmentService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getApplicationTreatmentDetails();

  }

  getApplicationTreatmentDetails() {
    return this.applicationtreatmentService.getApplicationTreatmentDetails()
      .subscribe(
        applicationtreatments => {
          console.log(applicationtreatments);
          this.applicationtreatments = applicationtreatments;
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.applicationtreatmentService.deleteApplicationTreatmentDetail(id)
        .subscribe(result => {
          this.message = "ApplicationTreatment deleted Successfully!"
          // console.log(result);
          this.getApplicationTreatmentDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('applicationtreatment/add');
  }
}

