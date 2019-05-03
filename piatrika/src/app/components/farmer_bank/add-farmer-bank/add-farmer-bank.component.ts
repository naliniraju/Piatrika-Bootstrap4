import { Component, OnInit } from '@angular/core';
import { FarmerBank } from 'src/app/models/farmer-bank';
import { Farmer } from 'src/app/models/farmer';
import { Bank } from 'src/app/models/bank';
import { FarmerBankService } from 'src/app/services/farmer_bank/farmer-bank.service';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { BankService } from 'src/app/services/bank/bank.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-farmer-bank',
  templateUrl: './add-farmer-bank.component.html',
  styleUrls: ['./add-farmer-bank.component.css']
})
export class AddFarmerBankComponent implements OnInit {

  farmerbank: FarmerBank = new FarmerBank();
  submitted = false;
  farmerbanks: FarmerBank[];
  farmers: Farmer[];
  banks: Bank[];
  

  constructor(
    private farmerbankService: FarmerBankService,
    private farmersService: FarmersService,
    private bankService: BankService,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.farmersService.getFarmerDetails().subscribe(data=>this.farmers=data);
    this.bankService.getBankDetails().subscribe(data=>this.banks=data);

  };

  newFarmerBank(): void {
    this.submitted = false;
    this.farmerbank = new FarmerBank();
  }

  addFarmerBankDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.farmerbank);

    this.farmerbankService.addFarmerBankDetail(this.farmerbank)
      .subscribe();
    this.getFarmerBankDetails();
    //this.location.back();
    this.router.navigateByUrl('/farmerbanks');
  }

  getFarmerBankDetails() {
    return this.farmerbankService.getFarmerBankDetails()
      .subscribe(
        farmerbanks => {
          console.log(farmerbanks);
          this.farmerbanks = farmerbanks;
        }
      );
  }

}


