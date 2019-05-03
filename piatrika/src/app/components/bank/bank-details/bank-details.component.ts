import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { BankService } from 'src/app/services/bank/bank.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  mybank = new Bank();
  submitted = false;
  message: string;
  banks:Bank[];
  constructor(
    private bankService:BankService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bankService.getBankDetail(id)
      .subscribe(bank => this.mybank = bank);

  }
//   getBankDetails() {
//     return this.bankService.getBankDetails()
//                .subscribe(
//                  banks => {
//                   console.log(banks);
//                   this.banks = banks;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.mybank);
  this.submitted = true;
  this.bankService.updateBankDetail(this.mybank)
      .subscribe(result => this.message = "Bank Updated Successfully!");
      //this.getBankDetails();
      this.ngOnInit();
    this.location.back();

}

}
