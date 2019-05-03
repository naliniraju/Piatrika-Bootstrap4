import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApplicationTreatment } from 'src/app/models/application-treatment';
import { LandVillage } from 'src/app/models/land-village';
import { ApplicationTreatmentService } from 'src/app/services/application_treatment/application-treatment.service';
import { LandVillageService } from 'src/app/services/land_village/land-village.service';


@Component({
  selector: 'app-application-treatment-details',
  templateUrl: './application-treatment-details.component.html',
  styleUrls: ['./application-treatment-details.component.css']
})
export class ApplicationTreatmentDetailsComponent implements OnInit {

  applicationtreatment = new ApplicationTreatment();
  submitted = false;
  message: string;
  applicationtreatments:ApplicationTreatment[];
  landvillages: LandVillage[];
  constructor(
    private applicationtreatmentService:ApplicationTreatmentService,
    private landvillageService:LandVillageService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.landvillageService.getLandVillageDetails().subscribe(data=>this.landvillages=data);
    const id = +this.route.snapshot.paramMap.get('id');
    this.applicationtreatmentService.getApplicationTreatmentDetail(id)
      .subscribe(applicationtreatment => this.applicationtreatment = applicationtreatment);

  }
//   getApplicationTreatmentDetails() {
//     return this.applicationtreatmentService.getApplicationTreatmentDetails()
//                .subscribe(
//                  applicationtreatments => {
//                   console.log(applicationtreatments);
//                   this.applicationtreatments = applicationtreatments;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.applicationtreatment);
  this.submitted = true;
  this.applicationtreatmentService.updateApplicationTreatmentDetail(this.applicationtreatment)
      .subscribe(result => this.message = "ApplicationTreatment Updated Successfully!");
      //this.getApplicationTreatmentDetails();
      this.ngOnInit();
    this.location.back();

}


}

