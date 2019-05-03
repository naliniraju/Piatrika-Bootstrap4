import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { Router } from '@angular/router';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Village } from 'src/app/models/village';
import { VillageService } from 'src/app/services/village/village.service';
// import LocationPicker from "location-picker";


@Component({
  selector: 'app-add-farmers',
  templateUrl: './add-farmers.component.html',
  styleUrls: ['./add-farmers.component.css']
})
export class AddFarmersComponent implements OnInit {

  farmer: Farmer = new Farmer();
  submitted = false;
  farmers: Farmer[];
  uploadForm: FormGroup;
  villages: Village[];
  url: string | ArrayBuffer;
  // lp: LocationPicker;


  private piatrikaUrl = 'http://localhost:3000/farmers';

  constructor(
    private farmerService: FarmersService,
    private villageService: VillageService,
    private router: Router,
    private location: Location,
    private http: HttpClient
  ) { 
     }
  ngOnInit() {
    this.villageService.getVillageDetails().subscribe(data => this.villages = data);
    // this.lp = new LocationPicker('map');

  }
  newFarmer(): void {
    this.submitted = false;
    this.farmer = new Farmer();
  }

  addFarmerDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.farmer);
    this.farmerService.addFarmerDetail(this.farmer)
      .subscribe();
    this.getFarmerDetails();
    this.router.navigate(['/farmers']);
    // this.location.back();
  }

  getFarmerDetails() {
    return this.farmerService.getFarmerDetails()
      .subscribe(
        farmers => {
          console.log(farmers);
          this.farmers = farmers;
        }
      );
  }
  onFileSelect(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);//read file as data url

      reader.onload = (event) => {//called once readAsDataURL is completed
        // this.url=event.target.result;
        this.url = reader.result;
      }
    }

  }
//   setLocation() {
//     console.log(this.lp.getMarkerPosition());
    
//  }
 
 

}


