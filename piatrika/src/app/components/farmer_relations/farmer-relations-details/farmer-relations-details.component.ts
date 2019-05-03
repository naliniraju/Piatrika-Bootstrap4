import { Component, OnInit } from '@angular/core';
import { FarmerRelation } from 'src/app/models/farmer-relation';
import { Person } from 'src/app/models/person';
import { FarmerRelationsService } from 'src/app/services/farmer_relations/farmer-relations.service';
import { PersonService } from 'src/app/services/person/person.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-farmer-relations-details',
  templateUrl: './farmer-relations-details.component.html',
  styleUrls: ['./farmer-relations-details.component.css']
})
export class FarmerRelationsDetailsComponent implements OnInit {


  
  farmerrelation = new FarmerRelation();
  submitted = false;
  message: string;
  farmerrelations:FarmerRelation[];
  persons: Person[];



  constructor(
    private farmerrelationService:FarmerRelationsService,
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.personService.getPersonDetails().subscribe(data=>this.persons=data);

    const id = +this.route.snapshot.paramMap.get('id');
    this.farmerrelationService.getFarmerRelationDetail(id)
      .subscribe(farmerrelation => this.farmerrelation = farmerrelation);

  }
//   getFarmerRelationDetails() {
//     return this.farmerrelationService.getFarmerRelationDetails()
//                .subscribe(
//                  farmerrelations => {
//                   console.log(farmerrelations);
//                   this.farmerrelations = farmerrelations;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.farmerrelation);
  this.submitted = true;
  this.farmerrelationService.updateFarmerRelationDetail(this.farmerrelation)
      .subscribe(result => this.message = "FarmerRelation Updated Successfully!");
      //this.getFarmerRelationDetails();
      this.ngOnInit();
    this.location.back();

}

}
