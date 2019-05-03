import { Component, OnInit } from '@angular/core';
import { Guarantor } from 'src/app/models/guarantor';
import { Season } from 'src/app/models/season';
import { GuarantorService } from 'src/app/services/guarantor/guarantor.service';
import { SeasonService } from 'src/app/services/season/season.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person/person.service';


@Component({
  selector: 'app-add-guarantor',
  templateUrl: './add-guarantor.component.html',
  styleUrls: ['./add-guarantor.component.css']
})
export class AddGuarantorComponent implements OnInit {

  guarantor: Guarantor = new Guarantor();
  submitted = false;
  guarantors: Guarantor[];
  seasons: Season[];
  persons:Person[];
  

  constructor(
    private guarantorService: GuarantorService,
    private seasonService: SeasonService,
    private personService: PersonService,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.seasonService.getSeasonDetails().subscribe(data=>this.seasons=data);
    this.personService.getPersonDetails().subscribe(data=>this.persons=data);
  };

  newGuarantor(): void {
    this.submitted = false;
    this.guarantor = new Guarantor();
  }

  addGuarantorDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.guarantor);

    this.guarantorService.addGuarantorDetail(this.guarantor)
      .subscribe();
    this.getGuarantorDetails();
    //this.location.back();
    this.router.navigateByUrl('/guarantors');
  }

  getGuarantorDetails() {
    return this.guarantorService.getGuarantorDetails()
      .subscribe(
        guarantors => {
          console.log(guarantors);
          this.guarantors = guarantors;
        }
      );
  }

}


