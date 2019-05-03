import { Component, OnInit } from '@angular/core';
import { Village } from 'src/app/models/village';
import { VillageService } from 'src/app/services/village/village.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DivisionModel } from 'src/app/models/division-model';
import { DivisionSectionService } from 'src/app/services/division_section/division-section.service';

@Component({
  selector: 'app-village-details',
  templateUrl: './village-details.component.html',
  styleUrls: ['./village-details.component.css']
})
export class VillageDetailsComponent implements OnInit {

  
  village = new Village();
  submitted = false;
  message: string;
  villages:Village[];
  divisionmodels: DivisionModel[];



  constructor(
    private villageService:VillageService,
    private divisionsectionService: DivisionSectionService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.divisionsectionService.getDivisionDetails().subscribe(data=>this.divisionmodels=data);

    const id = +this.route.snapshot.paramMap.get('id');
    this.villageService.getVillageDetail(id)
      .subscribe(village => this.village = village);

  }
//   getVillageDetails() {
//     return this.villageService.getVillageDetails()
//                .subscribe(
//                  villages => {
//                   console.log(villages);
//                   this.villages = villages;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.village);
  this.submitted = true;
  this.villageService.updateVillageDetail(this.village)
      .subscribe(result => this.message = "Village Updated Successfully!");
      //this.getVillageDetails();
      this.ngOnInit();
    this.location.back();

}

}
