import { Component, OnInit } from '@angular/core';
import { Crop } from 'src/app/models/crop';
import { CropService } from 'src/app/services/crop/crop.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css']
})
export class CropDetailsComponent implements OnInit {

  crop = new Crop();
  submitted = false;
  message: string;
  crops:Crop[];
  constructor(
    private cropService:CropService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cropService.getCropDetail(id)
      .subscribe(crop => this.crop = crop);

  }
//   getCropDetails() {
//     return this.cropService.getCropDetails()
//                .subscribe(
//                  crops => {
//                   console.log(crops);
//                   this.crops = crops;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.crop);
  this.submitted = true;
  this.cropService.updateCropDetail(this.crop)
      .subscribe(result => this.message = "Crop Updated Successfully!");
      //this.getCropDetails();
      this.ngOnInit();
    this.location.back();

}

}
