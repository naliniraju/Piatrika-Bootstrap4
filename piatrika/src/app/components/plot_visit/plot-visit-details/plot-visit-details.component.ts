import { Component, OnInit } from '@angular/core';
import { PlotVisit } from 'src/app/models/plot-visit';
import { Season } from 'src/app/models/season';
import { PlotVisitService } from 'src/app/services/plot_visit/plot-visit.service';
import { SeasonService } from 'src/app/services/season/season.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-plot-visit-details',
  templateUrl: './plot-visit-details.component.html',
  styleUrls: ['./plot-visit-details.component.css']
})
export class PlotVisitDetailsComponent implements OnInit {


  
  plotvisit = new PlotVisit();
  submitted = false;
  message: string;
  plotvisits:PlotVisit[];
  seasons: Season[];



  constructor(
    private plotvisitService:PlotVisitService,
    private seasonService: SeasonService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.seasonService.getSeasonDetails().subscribe(data=>this.seasons=data);

    const id = +this.route.snapshot.paramMap.get('id');
    this.plotvisitService.getPlotVisitDetail(id)
      .subscribe(plotvisit => this.plotvisit = plotvisit);

  }
//   getPlotVisitDetails() {
//     return this.plotvisitService.getPlotVisitDetails()
//                .subscribe(
//                  plotvisits => {
//                   console.log(plotvisits);
//                   this.plotvisits = plotvisits;
//                  }
//                 );
//  }
 update(): void {
   console.log(this.plotvisit);
  this.submitted = true;
  this.plotvisitService.updatePlotVisitDetail(this.plotvisit)
      .subscribe(result => this.message = "PlotVisit Updated Successfully!");
      //this.getPlotVisitDetails();
      this.ngOnInit();
    this.location.back();

}

}
