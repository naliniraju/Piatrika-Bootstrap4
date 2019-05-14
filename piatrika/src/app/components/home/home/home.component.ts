import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes = [{name:'applicationtreatments'},
  {name:'banks'},{name:'crops'},{name:'divisionmodels'},{name:'farmers'},{name:'farmerbanks'},{name:'farmerrelations'},
  {name:'guarantors'},
  {name:'landvillages'},{name:'loans'},{name:'persons'},{name:'phones'},
  {name:'plotvisits'},{name:'seasons'},{name:'varietees'},{name:'villages'}
];
 
  
 
  constructor(
    
  ) { }
 
  ngOnInit() {
  }
  
 
}
