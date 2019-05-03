import { Component, OnInit } from '@angular/core';
import { Guarantor } from 'src/app/models/guarantor';
import { GuarantorService } from 'src/app/services/guarantor/guarantor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guarantor',
  templateUrl: './guarantor.component.html',
  styleUrls: ['./guarantor.component.css']
})
export class GuarantorComponent implements OnInit {

 
  guarantor = new Guarantor();
  submitted = false;
  message: string;
  guarantors: Guarantor[];

  constructor(private guarantorService: GuarantorService,private router: Router) { }

  ngOnInit(): void {
    this.getGuarantorDetails();

  }

  getGuarantorDetails() {
    return this.guarantorService.getGuarantorDetails()
      .subscribe(
        guarantors => {
          console.log(guarantors);
          this.guarantors = guarantors;
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.guarantorService.deleteGuarantorDetail(id)
        .subscribe(result => {
          this.message = "Guarantor deleted Successfully!"
          // console.log(result);
          this.getGuarantorDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('guarantor/add');
  }
}
