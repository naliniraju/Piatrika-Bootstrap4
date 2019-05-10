import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { HttpClient } from '@angular/common/http';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Router } from '@angular/router';
declare let L;
declare var $:any;
import '../../../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'
import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/leaflet/images/marker-icon-2x.png';
const iconUrl = 'assets/leaflet/images/marker-icon.png';
const shadowUrl = 'assets/leaflet/images/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;
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
  latitude: any;
  longitude: any;
  

  constructor(private farmerService: FarmersService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getFarmerDetails();
  //   let mapCenter = L.map('map').setView([this.latitude, this.longitude], 13);
          
  //           let map = L.map('mapid').setView(mapCenter, 13)
   
    
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //         attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     }).addTo(map);
  
  // var marker = L.marker(mapCenter).addTo(map);
  // var updateMarker = function(lat, lng) {
  //     marker
  //         .setLatLng([lat, lng])
  //         .bindPopup("Your location :  " + marker.getLatLng().toString())
  //         .openPopup();
  //     return false;
  // };

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
