import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Variety } from 'src/app/models/variety';
import { VarietyService } from 'src/app/services/variety/variety.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-variety',
  templateUrl: './variety.component.html',
  styleUrls: ['./variety.component.css']
})
export class VarietyComponent implements OnInit {

  varietee = new Variety();
  submitted = false;
  message: string;
  varietees: Variety[];

  constructor(private varieteeService: VarietyService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getVarietyDetails();

  }

  getVarietyDetails() {
    return this.varieteeService.getVarietyDetails()
      .subscribe(
        varietees => {
          console.log(varietees);
          this.varietees = varietees
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.varieteeService.deleteVarietyDetail(id)
        .subscribe(result => {
          this.message = "Variety deleted Successfully!"
          // console.log(result);
          this.getVarietyDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('varietee/add');
  }

}


