import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { ActivatedRoute } from '@angular/router';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Location } from '@angular/common';
import { Village } from 'src/app/models/village';
import { VillageService } from 'src/app/services/village/village.service';
import { latLng, Map, tileLayer, LatLng } from 'leaflet';
//import * as L from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import * as $ from 'jquery'
declare const L: any; // --> Works
import 'leaflet-draw';
import { HttpErrorResponse } from '@angular/common/http';
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
  color:'#128128';

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
      .subscribe(() => this.message = "Farmer Updated Successfully!");
      //this.getFarmerDetails();
      this.ngOnInit();
    this.location.back();

}
onFileSelect(event) {
  if (event.target.files.length > 0) {
   // this.uploadForm.get('ryot_photo').setValue(file);
  }
  // const formData = new FormData();
  // formData.append('file', this.uploadForm.get('ryot_photo').value);

  // this.http.post<any>(this.piatrikaUrl, formData).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.log(err)
  // );
  
}
// drawOptions = {
//   position: 'topright',
//   draw: {
//     polygon: {
//       shapeOptions: {
//         color: this.color
//       }
//     }
//   }
// };

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
      drawnItems.addLayer(layer);


        }
     });
     
      let drawnItems = L.featureGroup().addTo(map);
        
          //copied data from our database
     // let jsonDrawn='{"type":"Polygon","coordinates":[[[78.395888,17.442099],[78.395781,17.441837],[78.396324,17.441752],[78.39664,17.442156],[78.395888,17.442099]]]}'
       
      // this.farmerService.getFarmerDetails().subscribe(
      //   data => {
      //     this.farmers = data;	 // FILL THE ARRAY WITH DATA.
      //     let i=0;
      //       console.log(this.farmers[i].LatLng);
      //       for(i=0;this.farmers[i];i++){
      //       L.geoJson(JSON.parse(this.farmers[i].LatLng), {
      //         style: function (f) {
      //           return f.properties;
      //         }
      //       }).bindPopup(this.farmers[i].City+','+this.farmers[i].person_id).addTo(drawnItems);
      //     }
      //   },
      //   (err: HttpErrorResponse) => {
      //     console.log (err.message);
      //   }
      // );
      this.farmerService.getFarmerDetails().subscribe(
        data => {
          this.farmers = data;	 // fill the array with data.
            console.log(this.farmer.LatLng);
            this.farmers.forEach(() => {

              L.geoJson(JSON.parse(this.farmer.LatLng), {
                style: function (f) {
                  return f.properties;
                }
                   
            }).bindPopup(this.farmer.City+','+this.farmer.person_id).addTo(drawnItems);
        });
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
       
        


}

}
