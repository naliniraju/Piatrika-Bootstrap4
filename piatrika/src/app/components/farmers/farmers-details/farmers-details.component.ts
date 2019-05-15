import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { ActivatedRoute } from '@angular/router';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Location } from '@angular/common';
import { Village } from 'src/app/models/village';
import { VillageService } from 'src/app/services/village/village.service';
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
  selector: 'app-farmers-details',
  templateUrl: './farmers-details.component.html',
  styleUrls: ['./farmers-details.component.css']
})
export class FarmersDetailsComponent implements OnInit {

   
  farmer = new Farmer();
  submitted = false;
  message: string;
  farmers:Farmer[];
  villages: Village[];
  constructor(
    private farmerService:FarmersService,
    private villageService:VillageService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.villageService.getVillageDetails().subscribe(data=>this.villages=data);
    const id = +this.route.snapshot.paramMap.get('id');
    this.farmerService.getFarmerDetail(id)
      .subscribe(farmer => this.farmer = farmer);
      this.setLocation();
  }

setLocation(){
  navigator.geolocation.getCurrentPosition(function(location) {
              var mapCenter = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
              var map = new L.map('mapid').setView(mapCenter, 18);
  
   
   // Creating a Layer object
   var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
   map.addLayer(layer);      // Adding layer to the map
   
   // Creating latlng object
   var latlngs = [[17.441051,78.394892],[17.44055,78.3949080],[17.440683,78.3968120],[17.441322,78.396753]];
   //var latlngs=map.getBounds().toBBoxString();
  
   console.log(latlngs);
   // Creating a polygon
   var polygon = L.polygon(latlngs, {color: 'green',width:'2px'});
   
   // Creating layer group
   var layerGroup = L.layerGroup([polygon]);
   layerGroup.addTo(map);    // Adding layer group to map
   // Initialise the FeatureGroup to store editable layers
   var drawnItems = new L.FeatureGroup();
   map.addLayer(drawnItems);


   // Initialise the draw control and pass it the FeatureGroup of editable layers
   var drawControl = new L.Control.Draw({
     edit: {
       featureGroup: drawnItems
     }

   });

   map.addControl(drawControl);

   map.on(L.Draw.Event.CREATED, function (e) {
     //      map.removeLayer(marker);// remove marker

     var type = e.layerType
     var layer = e.layer;
     if (type === 'polygon') {
       layer.bindPopup(layer.getLatLngs());

       //$('#LatLng').val(map.getBounds().toBBoxString());
       $('#LatLng').val(JSON.stringify(layer.toGeoJSON()));
       // console.log(JSON.stringify(layer.toGeoJSON()));
       // console.log(layer.getLatLngs());
     }

     // Do whatever else you need to. (save to db, add to map etc)

     drawnItems.addLayer(layer);
    });
  });
}
 update(): void {
   console.log(this.farmer);
  this.submitted = true;
  this.farmerService.updateFarmerDetail(this.farmer)
      .subscribe(result => this.message = "Farmer Updated Successfully!");
      //this.getFarmerDetails();
      this.ngOnInit();
    this.location.back();

}
onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0].path;
   // this.uploadForm.get('ryot_photo').setValue(file);
  }
  // const formData = new FormData();
  // formData.append('file', this.uploadForm.get('ryot_photo').value);

  // this.http.post<any>(this.piatrikaUrl, formData).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.log(err)
  // );
  
}

}
