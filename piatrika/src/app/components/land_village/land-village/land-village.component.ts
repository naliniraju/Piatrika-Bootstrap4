import { Component, OnInit } from '@angular/core';
import { LandVillage } from 'src/app/models/land-village';
import { LandVillageService } from 'src/app/services/land_village/land-village.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-village',
  templateUrl: './land-village.component.html',
  styleUrls: ['./land-village.component.css']
})
export class LandVillageComponent implements OnInit {

  landvillage = new LandVillage();
  submitted = false;
  message: string;
  landvillages: LandVillage[];

  constructor(private landvillageService: LandVillageService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getLandVillageDetails();

  }

  getLandVillageDetails() {
    return this.landvillageService.getLandVillageDetails()
      .subscribe(
        landvillages => {
          console.log(landvillages);
          this.landvillages = landvillages
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.landvillageService.deleteLandVillageDetail(id)
        .subscribe(result => {
          this.message = "LandVillage deleted Successfully!"
          // console.log(result);
          this.getLandVillageDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('landvillage/add');
  }

}

