import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan';
import { LoanService } from 'src/app/services/loan/loan.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {


  loan = new Loan();
  submitted = false;
  message: string;
  loans: Loan[];

  constructor(private loanService: LoanService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getLoanDetails();

  }

  getLoanDetails() {
    return this.loanService.getLoanDetails()
      .subscribe(
        loans => {
          console.log(loans);
          this.loans = loans
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.loanService.deleteLoanDetail(id)
        .subscribe(result => {
          this.message = "Loan deleted Successfully!"
          // console.log(result);
          this.getLoanDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('loan/add');
  }
}

