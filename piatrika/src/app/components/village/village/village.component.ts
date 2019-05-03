import { Component, OnInit } from '@angular/core';
import { Village } from 'src/app/models/village';
import { VillageService } from 'src/app/services/village/village.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  village = new Village();
  submitted = false;
  message: string;
  villages: Village[];

  constructor(private villageService: VillageService, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getVillageDetails();

  }

  getVillageDetails() {
    return this.villageService.getVillageDetails()
      .subscribe(
        villages => {
          console.log(villages);
          this.villages = villages
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.villageService.deleteVillageDetail(id)
        .subscribe(result => {
          this.message = "Village deleted Successfully!"
          // console.log(result);
          this.getVillageDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('village/add');
  }
}

