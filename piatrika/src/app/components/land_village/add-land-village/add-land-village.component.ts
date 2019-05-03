import { Component, OnInit } from '@angular/core';
import { LandVillage } from 'src/app/models/land-village';
import { Village } from 'src/app/models/village';
import { LandVillageService } from 'src/app/services/land_village/land-village.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VillageService } from 'src/app/services/village/village.service';

@Component({
  selector: 'app-add-land-village',
  templateUrl: './add-land-village.component.html',
  styleUrls: ['./add-land-village.component.css']
})
export class AddLandVillageComponent implements OnInit {

  landvillage: LandVillage = new LandVillage();
  submitted = false;
  landvillages: LandVillage[];
  villages: Village[];
  

  constructor(
    private landvillageService: LandVillageService,
     private villageService: VillageService,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.villageService.getVillageDetails().subscribe(data=>this.villages=data);
  };

  newLandVillage(): void {
    this.submitted = false;
    this.landvillage = new LandVillage();
  }

  addLandVillageDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.landvillage);

    this.landvillageService.addLandVillageDetail(this.landvillage)
      .subscribe();
    this.getLandVillageDetails();
    //this.location.back();
    this.router.navigateByUrl('/landvillages');
  }

  getLandVillageDetails() {
    return this.landvillageService.getLandVillageDetails()
      .subscribe(
        landvillages => {
          console.log(landvillages);
          this.landvillages = landvillages;
        }
      );
  }

}


