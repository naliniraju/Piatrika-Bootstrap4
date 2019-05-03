import { Component, OnInit } from '@angular/core';
import { DivisionModel } from 'src/app/models/division-model';
import { Router } from '@angular/router';
import { DivisionSectionService } from 'src/app/services/division_section/division-section.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-division-section',
  templateUrl: './add-division-section.component.html',
  styleUrls: ['./add-division-section.component.css']
})
export class AddDivisionSectionComponent implements OnInit {

  divisionmodel: DivisionModel = new DivisionModel();
  submitted = false;
  divisionmodels: DivisionModel[];

  constructor(
    private divisionsectionService: DivisionSectionService,
    private router: Router,
    private location:Location
  ) { }
  ngOnInit() {

  }
  newDivision(): void {
    this.submitted = false;
    this.divisionmodel = new DivisionModel();
  }

  addDivisionDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.divisionmodel);
    this.divisionsectionService.addDivisionDetail(this.divisionmodel)
      .subscribe();
    this.getDivisionDetails();
    this.router.navigate(['/divisionmodels']);
    //this.location.back();
  }

  getDivisionDetails() {
    return this.divisionsectionService.getDivisionDetails()
      .subscribe(
        divisionmodels => {
          console.log(divisionmodels);
          this.divisionmodels = divisionmodels;
        }
      );
  }

}
