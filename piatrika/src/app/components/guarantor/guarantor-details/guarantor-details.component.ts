import { Component, OnInit } from '@angular/core';
import { Guarantor } from 'src/app/models/guarantor';
import { Season } from 'src/app/models/season';
import { Person } from 'src/app/models/person';
import { GuarantorService } from 'src/app/services/guarantor/guarantor.service';
import { SeasonService } from 'src/app/services/season/season.service';
import { PersonService } from 'src/app/services/person/person.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-guarantor-details',
  templateUrl: './guarantor-details.component.html',
  styleUrls: ['./guarantor-details.component.css']
})
export class GuarantorDetailsComponent implements OnInit {



  guarantor = new Guarantor();
  submitted = false;
  message: string;
  guarantors: Guarantor[];
  seasons: Season[];
  persons: Person[];



  constructor(
    private guarantorService: GuarantorService,
    private seasonService: SeasonService,
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.seasonService.getSeasonDetails().subscribe(data => this.seasons = data);
    this.personService.getPersonDetails().subscribe(data => this.persons = data);
    const id = +this.route.snapshot.paramMap.get('id');
    this.guarantorService.getGuarantorDetail(id)
      .subscribe(guarantor => this.guarantor = guarantor);

  }
  //   getGuarantorDetails() {
  //     return this.guarantorService.getGuarantorDetails()
  //                .subscribe(
  //                  guarantors => {
  //                   console.log(guarantors);
  //                   this.guarantors = guarantors;
  //                  }
  //                 );
  //  }
  update(): void {
    console.log(this.guarantor);
    this.submitted = true;
    this.guarantorService.updateGuarantorDetail(this.guarantor)
      .subscribe(result => this.message = "Guarantor Updated Successfully!");
    //this.getGuarantorDetails();
    this.ngOnInit();
    this.location.back();

  }

}
