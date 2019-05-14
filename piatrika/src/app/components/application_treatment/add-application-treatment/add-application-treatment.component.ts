import { Component, OnInit } from '@angular/core';
import { ApplicationTreatment } from 'src/app/models/application-treatment';
import { LandVillage } from 'src/app/models/land-village';
import { ApplicationTreatmentService } from 'src/app/services/application_treatment/application-treatment.service';
import { LandVillageService } from 'src/app/services/land_village/land-village.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-application-treatment',
  templateUrl: './add-application-treatment.component.html',
  styleUrls: ['./add-application-treatment.component.css']
})
export class AddApplicationTreatmentComponent implements OnInit {
  // date:Date = new Date(2018, 0, 30);

  applicationtreatment: ApplicationTreatment = new ApplicationTreatment();
  submitted = false;
  applicationtreatments: ApplicationTreatment[];
  landvillages: LandVillage[];
  // datePickerConfig:Partial<BsDatepickerConfig>;
  constructor(
    private applicationtreatmentService: ApplicationTreatmentService,
     private landvillageService: LandVillageService,
    private router: Router,
    private location: Location
  ) { 
    
    // this.datePickerConfig = Object.assign({},
    // {
    //   containerClass: 'theme-green',
    //   showWeekNumbers: false,
    //   minDate: new Date(2018, 0, 1),
    //   maxDate: new Date(2050, 11, 31),
    //   dateInputFormat: 'DD/MM/YYYY'
    // });
  }
  ngOnInit() {
    
    this.landvillageService.getLandVillageDetails().subscribe(data=>this.landvillages=data);
  };

  newApplicationTreatment(): void {
    this.submitted = false;
    this.applicationtreatment = new ApplicationTreatment();
  }

  addApplicationTreatmentDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.applicationtreatment);

    this.applicationtreatmentService.addApplicationTreatmentDetail(this.applicationtreatment)
      .subscribe();
    this.getApplicationTreatmentDetails();
    //this.location.back();
    this.router.navigateByUrl('/applicationtreatments');
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

}


