import { Component, OnInit } from '@angular/core';
import { FarmerRelation } from 'src/app/models/farmer-relation';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person/person.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FarmerRelationsService } from 'src/app/services/farmer_relations/farmer-relations.service';

@Component({
  selector: 'app-add-farmer-relations',
  templateUrl: './add-farmer-relations.component.html',
  styleUrls: ['./add-farmer-relations.component.css']
})
export class AddFarmerRelationsComponent implements OnInit {

  farmerrelation: FarmerRelation = new FarmerRelation();
  submitted = false;
  farmerrelations: FarmerRelation[];
  persons: Person[];
  

  constructor(
    private farmerrelationService: FarmerRelationsService,
    private personService: PersonService,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.personService.getPersonDetails().subscribe(data=>this.persons=data);
  };

  newFarmerRelation(): void {
    this.submitted = false;
    this.farmerrelation = new FarmerRelation();
  }

  addFarmerRelationDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.farmerrelation);

    this.farmerrelationService.addFarmerRelationDetail(this.farmerrelation)
      .subscribe();
    this.getFarmerRelationDetails();
    //this.location.back();
    this.router.navigateByUrl('/farmerrelations');
  }

  getFarmerRelationDetails() {
    return this.farmerrelationService.getFarmerRelationDetails()
      .subscribe(
        farmerrelations => {
          console.log(farmerrelations);
          this.farmerrelations = farmerrelations;
        }
      );
  }

}


