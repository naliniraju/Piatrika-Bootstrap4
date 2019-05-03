import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { ActivatedRoute } from '@angular/router';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Location } from '@angular/common';
import { Village } from 'src/app/models/village';
import { VillageService } from 'src/app/services/village/village.service';

@Component({
  selector: 'app-farmers-details',
  templateUrl: './farmers-details.component.html',
  styleUrls: ['./farmers-details.component.css']
})
export class FarmersDetailsComponent implements OnInit {

   
  farmer = new Farmer();
  submitted = false;
  message: string;
  farmers:Farmer[];
  villages: Village[];
  constructor(
    private farmerService:FarmersService,
    private villageService:VillageService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.villageService.getVillageDetails().subscribe(data=>this.villages=data);
    const id = +this.route.snapshot.paramMap.get('id');
    this.farmerService.getFarmerDetail(id)
      .subscribe(farmer => this.farmer = farmer);

  }
//   getFarmerDetails() {
//     return this.farmerService.getFarmerDetails()
//                .subscribe(
//                  farmers => {
//                   console.log(farmers);
//                   this.farmers = farmers;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.farmer);
  this.submitted = true;
  this.farmerService.updateFarmerDetail(this.farmer)
      .subscribe(result => this.message = "Farmer Updated Successfully!");
      //this.getFarmerDetails();
      this.ngOnInit();
    this.location.back();

}
onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0].path;
   // this.uploadForm.get('ryot_photo').setValue(file);
  }
  // const formData = new FormData();
  // formData.append('file', this.uploadForm.get('ryot_photo').value);

  // this.http.post<any>(this.piatrikaUrl, formData).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.log(err)
  // );
  
}

}
