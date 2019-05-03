import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FarmerRelation } from 'src/app/models/farmer-relation';
import { FarmerRelationsService } from 'src/app/services/farmer_relations/farmer-relations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-relations',
  templateUrl: './farmer-relations.component.html',
  styleUrls: ['./farmer-relations.component.css']
})
export class FarmerRelationsComponent implements OnInit {

  
  farmerrelation = new FarmerRelation();
  submitted = false;
  message: string;
  farmerrelations: FarmerRelation[];

  constructor(private farmerrelationService: FarmerRelationsService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getFarmerRelationDetails();

  }

  getFarmerRelationDetails() {
    return this.farmerrelationService.getFarmerRelationDetails()
      .subscribe(
        farmerrelations => {
          console.log(farmerrelations);
          this.farmerrelations = farmerrelations
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.farmerrelationService.deleteFarmerRelationDetail(id)
        .subscribe(result => {
          this.message = "FarmerRelation deleted Successfully!"
          // console.log(result);
          this.getFarmerRelationDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('farmerrelation/add');
  }

}
