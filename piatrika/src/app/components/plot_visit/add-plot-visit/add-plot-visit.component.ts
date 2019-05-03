import { Component, OnInit } from '@angular/core';
import { PlotVisit } from 'src/app/models/plot-visit';
import { Season } from 'src/app/models/season';
import { PlotVisitService } from 'src/app/services/plot_visit/plot-visit.service';
import { SeasonService } from 'src/app/services/season/season.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-plot-visit',
  templateUrl: './add-plot-visit.component.html',
  styleUrls: ['./add-plot-visit.component.css']
})
export class AddPlotVisitComponent implements OnInit {

  plotvisit: PlotVisit = new PlotVisit();
  submitted = false;
  plotvisits: PlotVisit[];
  seasons: Season[];
   timestamp=Date.now();
  constructor(
    private plotvisitService: PlotVisitService,
    private seasonService: SeasonService,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.seasonService.getSeasonDetails().subscribe(data=>this.seasons=data);

  };

  newPlotVisit(): void {
    this.submitted = false;
    this.plotvisit = new PlotVisit();
  }

  addPlotVisitDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.plotvisit);

    this.plotvisitService.addPlotVisitDetail(this.plotvisit)
      .subscribe();
    this.getPlotVisitDetails();
    //this.location.back();
    this.router.navigateByUrl('/plotvisits');
  }

  getPlotVisitDetails() {
    return this.plotvisitService.getPlotVisitDetails()
      .subscribe(
        plotvisits => {
          console.log(plotvisits);
          this.plotvisits = plotvisits;
        }
      );
  }

}


