import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { BankService } from 'src/app/services/bank/bank.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  bank=new Bank();
  submitted = false;
  message: string;
  banks: Bank[];

 constructor(private bankService:BankService,private http: HttpClient,private router:Router) {}

 ngOnInit(): void {
   this.getDivisionDetails();
    
 }

 getDivisionDetails() {
   return this.bankService.getBankDetails()
              .subscribe(
                banks => {
                 console.log(banks);
                 this.banks = banks
                }
               );
              }
              delete(id:number) {
                this.submitted = true;
                let r = confirm("Are you sure you want to delete...?");
                if (r == true) {
                this.bankService.deleteBankDetail(id)
                    .subscribe(result =>{
                     this.message = "Division deleted Successfully!"
                     // console.log(result);
                      this.getDivisionDetails();
                    },  error => console.log(error));
                    
                               }
                             }
                             goBack(){
                              this.router.navigateByUrl('bank/add');
                            }

}




