import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/models/season';
import { SeasonService } from 'src/app/services/season/season.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  season = new Season();
  submitted = false;
  message: string;
  seasons: Season[];

  constructor(private seasonService: SeasonService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getSeasonDetails();

  }

  getSeasonDetails() {
    return this.seasonService.getSeasonDetails()
      .subscribe(
        seasons => {
          console.log(seasons);
          this.seasons = seasons;
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.seasonService.deleteSeasonDetail(id)
        .subscribe(result => {
          this.message = "Season deleted Successfully!"
          // console.log(result);
          this.getSeasonDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('season/add');
  }
  
}
