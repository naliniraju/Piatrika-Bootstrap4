import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/models/season';
import { LandVillage } from 'src/app/models/land-village';
import { SeasonService } from 'src/app/services/season/season.service';
import { LandVillageService } from 'src/app/services/land_village/land-village.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Farmer } from 'src/app/models/farmer';


@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.css']
})
export class SeasonDetailsComponent implements OnInit {

  season = new Season();
  submitted = false;
  message: string;
  seasons:Season[];
  landvillages: LandVillage[];
  farmers: Farmer[];
  constructor(
    private seasonService:SeasonService,
    private landvillageService:LandVillageService,
    private farmersService:FarmersService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.landvillageService.getLandVillageDetails().subscribe(data=>this.landvillages=data);
    this.farmersService.getFarmerDetails().subscribe(data=>this.farmers=data);

    const id = +this.route.snapshot.paramMap.get('id');
    this.seasonService.getSeasonDetail(id)
      .subscribe(season => this.season = season);

  }
//   getSeasonDetails() {
//     return this.seasonService.getSeasonDetails()
//                .subscribe(
//                  seasons => {
//                   console.log(seasons);
//                   this.seasons = seasons;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.season);
  this.submitted = true;
  this.seasonService.updateSeasonDetail(this.season)
      .subscribe(result => this.message = "Season Updated Successfully!");
      //this.getSeasonDetails();
      this.ngOnInit();
    this.location.back();

}

}


