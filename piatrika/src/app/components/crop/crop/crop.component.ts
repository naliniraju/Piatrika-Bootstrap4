import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crop } from 'src/app/models/crop';
import { CropService } from 'src/app/services/crop/crop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {

  crop=new Crop();
  submitted = false;
  message: string;
  crops: Crop[];

 constructor(private cropService:CropService,private http: HttpClient,private router: Router) {}

 ngOnInit(): void {
   this.getCropDetails();
    
 }

 getCropDetails() {
   return this.cropService.getCropDetails()
              .subscribe(
                crops => {
                 console.log(crops);
                 this.crops = crops
                }
               );
              }
              delete(id:number) {
                this.submitted = true;
                let r = confirm("Are you sure you want to delete...?");
                if (r == true) {
                this.cropService.deleteCropDetail(id)
                    .subscribe(result =>{
                     this.message = "Crop deleted Successfully!"
                     // console.log(result);
                      this.getCropDetails();
                    },  error => console.log(error));
                    
                               }
                             }
                             goBack(){
                              this.router.navigateByUrl('crop/add');
                            }

}




