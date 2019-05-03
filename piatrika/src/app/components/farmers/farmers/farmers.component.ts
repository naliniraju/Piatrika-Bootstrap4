import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { HttpClient } from '@angular/common/http';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {


  farmer = new Farmer();
  submitted = false;
  message: string;
  farmers: Farmer[];

  constructor(private farmerService: FarmersService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getFarmerDetails();

  }

  getFarmerDetails() {
    return this.farmerService.getFarmerDetails()
      .subscribe(
        farmers => {
          console.log(farmers);
          this.farmers = farmers
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.farmerService.deleteFarmerDetail(id)
        .subscribe(result => {
          this.message = "Farmer deleted Successfully!"
          // console.log(result);
          this.getFarmerDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('farmer/add');
  }
}
