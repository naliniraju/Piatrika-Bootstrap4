import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DivisionModel } from 'src/app/models/division-model';
import { DivisionSectionService } from 'src/app/services/division_section/division-section.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-division-section',
  templateUrl: './division-section.component.html',
  styleUrls: ['./division-section.component.css']
})
export class DivisionSectionComponent implements OnInit {

  divisionmodel=new DivisionModel();
  submitted = false;
  message: string;
  divisionmodels: DivisionModel[];

 constructor(private divisiondetailService:DivisionSectionService,private http: HttpClient,private router: Router) {}

 ngOnInit(): void {
   this.getDivisionDetails();
    
 }

 getDivisionDetails() {
   return this.divisiondetailService.getDivisionDetails()
              .subscribe(
                divisionmodels => {
                 console.log(divisionmodels);
                 this.divisionmodels = divisionmodels
                }
               );
              }
              delete(id:number) {
                this.submitted = true;
                let r = confirm("Are you sure you want to delete...?");
                if (r == true) {
                this.divisiondetailService.deleteDivisionDetail(id)
                    .subscribe(result =>{
                     this.message = "Division deleted Successfully!"
                     // console.log(result);
                      this.getDivisionDetails();
                    },  error => console.log(error));
                    
                               }
                             }
                             goBack(){
                              this.router.navigateByUrl('divisionmodel/add');
                            }

}



