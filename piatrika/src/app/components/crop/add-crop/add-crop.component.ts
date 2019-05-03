import { Component, OnInit } from '@angular/core';
import { Crop } from 'src/app/models/crop';
import { CropService } from 'src/app/services/crop/crop.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-crop',
  templateUrl: './add-crop.component.html',
  styleUrls: ['./add-crop.component.css']
})
export class AddCropComponent implements OnInit {

  crop: Crop = new Crop();
  submitted = false;
  crops: Crop[];

  constructor(
    private cropService: CropService,
    private router: Router,
    private location:Location
  ) { }
  ngOnInit() {

  }
  newCrop(): void {
    this.submitted = false;
    this.crop = new Crop();
  }

  addCropDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.crop);
    this.cropService.addCropDetail(this.crop)
      .subscribe();
    this.getCropDetails();
    this.router.navigate(['/crops']);
    //this.location.back();
  }

  getCropDetails() {
    return this.cropService.getCropDetails()
      .subscribe(
        crops => {
          console.log(crops);
          this.crops = crops;
        }
      );
  }

}

