import { Component, OnInit } from '@angular/core';
import { Village } from 'src/app/models/village';
import { Router } from '@angular/router';
import { VillageService } from 'src/app/services/village/village.service';
import { Location } from '@angular/common';
import { DivisionModel } from 'src/app/models/division-model';
import { DivisionSectionService } from 'src/app/services/division_section/division-section.service';


@Component({
  selector: 'app-add-village',
  templateUrl: './add-village.component.html',
  styleUrls: ['./add-village.component.css'],
  
})
export class AddVillageComponent implements OnInit {

  village: Village = new Village();
  submitted = false;
  villages: Village[];
  divisionmodels: DivisionModel[];
  

  constructor(
    private villageService: VillageService, private divisionsectionService: DivisionSectionService,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.divisionsectionService.getDivisionDetails().subscribe(data=>this.divisionmodels=data);
  };

  newVillage(): void {
    this.submitted = false;
    this.village = new Village();
  }

  addVillageDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.village);

    this.villageService.addVillageDetail(this.village)
      .subscribe();
    this.getVillageDetails();
   // this.location.back();
   this.router.navigateByUrl('/villages');
  }

  getVillageDetails() {
    return this.villageService.getVillageDetails()
      .subscribe(
        villages => {
          console.log(villages);
          this.villages = villages;
        }
      );
  }

}

