import { Component, OnInit } from '@angular/core';
import { Variety } from 'src/app/models/variety';
import { Crop } from 'src/app/models/crop';
import { VarietyService } from 'src/app/services/variety/variety.service';
import { CropService } from 'src/app/services/crop/crop.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-variety-details',
  templateUrl: './variety-details.component.html',
  styleUrls: ['./variety-details.component.css']
})
export class VarietyDetailsComponent implements OnInit {

  varietee = new Variety();
  submitted = false;
  message: string;
  varietees:Variety[];
  crops: Crop[];



  constructor(
    private varieteeService:VarietyService,
    private cropService: CropService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.cropService.getCropDetails().subscribe(data=>this.crops=data);

    const id = +this.route.snapshot.paramMap.get('id');
    this.varieteeService.getVarietyDetail(id)
      .subscribe(varietee => this.varietee = varietee);

  }
//   getVarietyDetails() {
//     return this.varieteeService.getVarietyDetails()
//                .subscribe(
//                  varietees => {
//                   console.log(varietees);
//                   this.varietees = varietees;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.varietee);
  this.submitted = true;
  this.varieteeService.updateVarietyDetail(this.varietee)
      .subscribe(result => this.message = "Variety Updated Successfully!");
      //this.getVarietyDetails();
      this.ngOnInit();
    this.location.back();

}

}

