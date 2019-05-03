import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/models/season';
import { SeasonService } from 'src/app/services/season/season.service';
import { HttpClient } from '@angular/common/http';
import { LandVillage } from 'src/app/models/land-village';
import { Farmer } from 'src/app/models/farmer';
import { LandVillageService } from 'src/app/services/land_village/land-village.service';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-season',
  templateUrl: './add-season.component.html',
  styleUrls: ['./add-season.component.css']
})
export class AddSeasonComponent implements OnInit {

  season: Season = new Season();
  submitted = false;
  seasons: Season[];
  landvillages: LandVillage[];
  farmers:Farmer[];
  

  constructor(
    private seasonService: SeasonService,
     private landvillageService: LandVillageService,
     private farmersService: FarmersService,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.landvillageService.getLandVillageDetails().subscribe(data=>this.landvillages=data);
    this.farmersService.getFarmerDetails().subscribe(data=>this.farmers=data);

  };

  newSeason(): void {
    this.submitted = false;
    this.season = new Season();
  }

  addSeasonDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.season);

    this.seasonService.addSeasonDetail(this.season)
      .subscribe();
    this.getSeasonDetails();
    //this.location.back();
    this.router.navigateByUrl('/seasons');
  }

  getSeasonDetails() {
    return this.seasonService.getSeasonDetails()
      .subscribe(
        seasons => {
          console.log(seasons);
          this.seasons = seasons;
        }
      );
  }

}


