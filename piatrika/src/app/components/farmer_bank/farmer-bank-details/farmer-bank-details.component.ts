import { Component, OnInit } from '@angular/core';
import { FarmerBank } from 'src/app/models/farmer-bank';
import { Farmer } from 'src/app/models/farmer';
import { Bank } from 'src/app/models/bank';
import { FarmerBankService } from 'src/app/services/farmer_bank/farmer-bank.service';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { BankService } from 'src/app/services/bank/bank.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-farmer-bank-details',
  templateUrl: './farmer-bank-details.component.html',
  styleUrls: ['./farmer-bank-details.component.css']
})
export class FarmerBankDetailsComponent implements OnInit {

  farmerbank: FarmerBank = new FarmerBank();
  submitted = false;
  farmerbanks: FarmerBank[];
  farmers: Farmer[];
  banks: Bank[];
  message:string;


  constructor(
    private farmerbankService: FarmerBankService,
    private farmersService: FarmersService,
    private bankService: BankService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.farmersService.getFarmerDetails().subscribe(data=>this.farmers=data);
    this.bankService.getBankDetails().subscribe(data=>this.banks=data);
    const id = +this.route.snapshot.paramMap.get('id');
    this.farmerbankService.getFarmerBankDetail(id)
      .subscribe(farmerbank => this.farmerbank = farmerbank);

  }
//   getFarmerBankDetails() {
//     return this.farmerbankService.getFarmerBankDetails()
//                .subscribe(
//                  farmerbanks => {
//                   console.log(farmerbanks);
//                   this.farmerbanks = farmerbanks;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.farmerbank);
  this.submitted = true;
  this.farmerbankService.updateFarmerBankDetail(this.farmerbank)
      .subscribe(result => this.message = "FarmerBank Updated Successfully!");
      //this.getFarmerBankDetails();
      this.ngOnInit();
    this.location.back();

}

}

