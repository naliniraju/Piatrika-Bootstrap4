import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlotVisit } from 'src/app/models/plot-visit';
import { PlotVisitService } from 'src/app/services/plot_visit/plot-visit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plot-visit',
  templateUrl: './plot-visit.component.html',
  styleUrls: ['./plot-visit.component.css']
})
export class PlotVisitComponent implements OnInit {

  plotvisit = new PlotVisit();
  submitted = false;
  message: string;
  plotvisits: PlotVisit[];

  constructor(private plotvisitService: PlotVisitService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getPlotVisitDetails();

  }

  getPlotVisitDetails() {
    return this.plotvisitService.getPlotVisitDetails()
      .subscribe(
        plotvisits => {
          console.log(plotvisits);
          this.plotvisits = plotvisits
        }
      );
  }
  delete(id: number) {
    this.submitted = true;
    let r = confirm("Are you sure you want to delete...?");
    if (r == true) {
      this.plotvisitService.deletePlotVisitDetail(id)
        .subscribe(result => {
          this.message = "PlotVisit deleted Successfully!"
          // console.log(result);
          this.getPlotVisitDetails();
        }, error => console.log(error));

    }
  }
  goBack(){
    this.router.navigateByUrl('plotvisit/add');
  }
}


