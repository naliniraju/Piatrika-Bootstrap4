import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan';
import { Farmer } from 'src/app/models/farmer';
import { LoanService } from 'src/app/services/loan/loan.service';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  loan = new Loan();
  submitted = false;
  message: string;
  loans:Loan[];
  farmers: Farmer[];
  constructor(
    private loanService:LoanService,
    private farmersService:FarmersService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.farmersService.getFarmerDetails().subscribe(data=>this.farmers=data);
    const id = +this.route.snapshot.paramMap.get('id');
    this.loanService.getLoanDetail(id)
      .subscribe(loan => this.loan = loan);

  }
//   getLoanDetails() {
//     return this.loanService.getLoanDetails()
//                .subscribe(
//                  loans => {
//                   console.log(loans);
//                   this.loans = loans;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.loan);
  this.submitted = true;
  this.loanService.updateLoanDetail(this.loan)
      .subscribe(result => this.message = "Loan Updated Successfully!");
      //this.getLoanDetails();
      this.ngOnInit();
    this.location.back();

}
}
