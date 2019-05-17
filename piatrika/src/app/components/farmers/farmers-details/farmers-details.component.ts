import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { ActivatedRoute } from '@angular/router';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Location } from '@angular/common';
import { Village } from 'src/app/models/village';
import { VillageService } from 'src/app/services/village/village.service';
import { latLng, Map, tileLayer } from 'leaflet';
//import * as L from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import * as $ from 'jquery'
declare const L: any; // --> Works
import 'leaflet-draw';
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
  map: L.Map;
  color:'green';

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
drawOptions = {
  position: 'topleft',
  draw: {
    polyline: {
      shapeOptions: {
        color: this.color
      }
    }
  }
};
options = {
  layers: [
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
  ],
  zoom: 18,
  center: latLng(8.524139, 76.936638)
};

   
onMapReady(map: Map) {

  function onLocationFound(e) {
    L.marker(e.latlng,{draggable:'true'}).on('dragend',(e)=>{
      $('#latitude').val(e.target.getLatLng().lat);
      $('#longitude').val(e.target.getLatLng().lng);
    }).addTo(map)
      .bindPopup("Current Location :" + e.latlng.lat +','+e.latlng.lng);
      $('#latitude').val(e.latlng.lat);
      $('#longitude').val(e.latlng.lng);
     }

  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);


  map.locate({setView: true, maxZoom: 18});
  map.on(L.Draw.Event.CREATED, function (e: any) {
    const type = (e as any).layerType,
      layer = (e as any).layer;
    if (type === 'polygon') {
      // here you got the polygon coordinates
       // layer.bindPopup(JSON.stringify(layer.toGeoJSON()) + '<br>' + layer._latlngs + '<br>' + map.getBounds().toBBoxString());
      $('#LatLng').val(JSON.stringify(layer.toGeoJSON()));
      layer.bindPopup(JSON.stringify(layer.toGeoJSON()));
      
        }
     });
      //copied data from our database
      let jsonDrawn='{"type":"Polygon","coordinates":[[[78.394608,17.441698],[78.394608,17.440877],[78.396329,17.440835],[78.396385,17.441581],[78.394608,17.4416980]]]}'
      let json = JSON.parse(jsonDrawn);
      
    //static data
      let latlngs = [[17.441051,78.394892],[17.44055,78.3949080],[17.440683,78.3968120],[17.441322,78.396753]];
      
      let polygon1 = L.polygon(latlngs, {color: 'red',width:'2px'});
      
      //console.log(polygon1);
      let layerGroup = L.layerGroup([polygon1]);
      layerGroup.addTo(map);

}

}
