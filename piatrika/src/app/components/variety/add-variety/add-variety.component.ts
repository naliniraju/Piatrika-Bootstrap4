import { Component, OnInit } from '@angular/core';
import { Variety } from 'src/app/models/variety';
import { Crop } from 'src/app/models/crop';
import { VarietyService } from 'src/app/services/variety/variety.service';
import { CropService } from 'src/app/services/crop/crop.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-variety',
  templateUrl: './add-variety.component.html',
  styleUrls: ['./add-variety.component.css']
})
export class AddVarietyComponent implements OnInit {

  varietee: Variety = new Variety();
  submitted = false;
  varietees: Variety[];
  crops: Crop[];
  

  constructor(
    private varieteeService: VarietyService,
    private cropService: CropService,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.cropService.getCropDetails().subscribe(data=>this.crops=data);
  };

  newVariety(): void {
    this.submitted = false;
    this.varietee = new Variety();
  }

  addVarietyDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.varietee);

    this.varieteeService.addVarietyDetail(this.varietee)
      .subscribe();
    this.getVarietyDetails();
    //this.location.back();
    this.router.navigateByUrl('/varietees');
  }

  getVarietyDetails() {
    return this.varieteeService.getVarietyDetails()
      .subscribe(
        varietees => {
          console.log(varietees);
          this.varietees = varietees;
        }
      );
  }

}



