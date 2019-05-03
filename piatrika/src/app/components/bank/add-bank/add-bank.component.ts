import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { BankService } from 'src/app/services/bank/bank.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  mybank: Bank = new Bank();
  submitted = false;
  banks: Bank[];
  ngOnInit(){

  }

  constructor(
    private bankService: BankService,
    private router: Router,
    private location: Location
  ) { }
  newBank(): void {
    this.submitted = false;
    this.mybank = new Bank();
  }

  addBankDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.mybank);

    this.bankService.addBankDetail(this.mybank)
      .subscribe();
    this.getBankDetails();
    //this.location.back();
    this.router.navigateByUrl('/banks');
  }

  getBankDetails() {
    return this.bankService.getBankDetails()
      .subscribe(
        banks => {
          console.log(banks);
          this.banks = banks;
        }
      );
  }
 
}
