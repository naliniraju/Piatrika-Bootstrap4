import { Component, OnInit } from '@angular/core';
import { LandVillage } from 'src/app/models/land-village';
import { Village } from 'src/app/models/village';
import { VillageService } from 'src/app/services/village/village.service';
import { ActivatedRoute } from '@angular/router';
import { LandVillageService } from 'src/app/services/land_village/land-village.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-land-village-details',
  templateUrl: './land-village-details.component.html',
  styleUrls: ['./land-village-details.component.css']
})
export class LandVillageDetailsComponent implements OnInit {

  landvillage = new LandVillage();
  submitted = false;
  message: string;
  landvillages:LandVillage[];
  villages: Village[];
  constructor(
    private landvillageService:LandVillageService,
    private villageService:VillageService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.villageService.getVillageDetails().subscribe(data=>this.villages=data);
    const id = +this.route.snapshot.paramMap.get('id');
    this.landvillageService.getLandVillageDetail(id)
      .subscribe(landvillage => this.landvillage = landvillage);

  }
//   getLandVillageDetails() {
//     return this.landvillageService.getLandVillageDetails()
//                .subscribe(
//                  landvillages => {
//                   console.log(landvillages);
//                   this.landvillages = landvillages;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.landvillage);
  this.submitted = true;
  this.landvillageService.updateLandVillageDetail(this.landvillage)
      .subscribe(result => this.message = "LandVillage Updated Successfully!");
      //this.getLandVillageDetails();
      this.ngOnInit();
    this.location.back();

}


}

