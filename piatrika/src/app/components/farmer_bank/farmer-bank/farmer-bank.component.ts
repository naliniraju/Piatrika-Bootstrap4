import { Component, OnInit } from '@angular/core';
import { FarmerBank } from 'src/app/models/farmer-bank';
import { FarmerBankService } from 'src/app/services/farmer_bank/farmer-bank.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-farmer-bank',
  templateUrl: './farmer-bank.component.html',
  styleUrls: ['./farmer-bank.component.css']
})
export class FarmerBankComponent implements OnInit {


  farmerbank = new FarmerBank();
  submitted = false;
  message: string;
  farmerbanks: FarmerBank[];

  constructor(private farmerbankService: FarmerBankService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getFarmerBankDetails();

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
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.farmerbankService.deleteFarmerBankDetail(id)
        .subscribe(result => {
          this.message = "FarmerBank deleted Successfully!"
          // console.log(result);
          this.getFarmerBankDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('farmerbank/add');
  }
}
