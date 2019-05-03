import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan';
import { Farmer } from 'src/app/models/farmer';
import { LoanService } from 'src/app/services/loan/loan.service';
import { Router } from '@angular/router';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {


  loan: Loan = new Loan();
  submitted = false;
  loans: Loan[];
  farmers: Farmer[];
  

  constructor(
    private loanService: LoanService,
     private farmersService: FarmersService,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.farmersService.getFarmerDetails().subscribe(data=>this.farmers=data);
  };

  newLoan(): void {
    this.submitted = false;
    this.loan = new Loan();
  }

  addLoanDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.loan);

    this.loanService.addLoanDetail(this.loan)
      .subscribe();
    this.getLoanDetails();
    //this.location.back();
    this.router.navigateByUrl('/loans');
  }

  getLoanDetails() {
    return this.loanService.getLoanDetails()
      .subscribe(
        loans => {
          console.log(loans);
          this.loans = loans;
        }
      );
  }

}
