import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DivisionModel } from 'src/app/models/division-model';
import { ActivatedRoute } from '@angular/router';
import { DivisionSectionService } from 'src/app/services/division_section/division-section.service';

@Component({
  selector: 'app-division-section-details',
  templateUrl: './division-section-details.component.html',
  styleUrls: ['./division-section-details.component.css']
})
export class DivisionSectionDetailsComponent implements OnInit {

  divisionmodel = new DivisionModel();
  submitted = false;
  message: string;
  divisionmodels:DivisionModel[];
  constructor(
    private divisionsectionService:DivisionSectionService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.divisionsectionService.getDivisionDetail(id)
      .subscribe(divisionmodel => this.divisionmodel = divisionmodel);

  }
//   getDivisionModelDetails() {
//     return this.divisionsectionService.getDivisionDetails()
//                .subscribe(
//                  divisionmodels => {
//                   console.log(divisionmodels);
//                   this.divisionmodels = divisionmodels;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.divisionmodel);
  this.submitted = true;
  this.divisionsectionService.updateDivisionDetail(this.divisionmodel)
      .subscribe(result => this.message = "DivisionModel Updated Successfully!");
      //this.getDivisionModelDetails();
      this.ngOnInit();
    this.location.back();

}

}

