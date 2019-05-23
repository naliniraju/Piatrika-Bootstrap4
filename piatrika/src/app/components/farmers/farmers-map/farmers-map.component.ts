import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Router } from '@angular/router';
import { latLng, Map, tileLayer } from 'leaflet';
import '../../../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'

//import * as L from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import * as $ from 'jquery'
declare const L: any; // --> Works
import 'leaflet-draw';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-farmers-map',
  templateUrl: './farmers-map.component.html',
  styleUrls: ['./farmers-map.component.css']
})
export class FarmersMapComponent implements OnInit {

 
  farmer = new Farmer();
  submitted = false;
  message: string;
  farmers: Farmer[];
  map: L.Map;
  color:'#128128';
  

  constructor(private farmerService: FarmersService, private http: HttpClient,private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getFarmerDetails();
    const id = +this.route.snapshot.paramMap.get('id');
    this.farmerService.getFarmerDetail(id)
      .subscribe(farmer => this.farmer = farmer);
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
    this.router.navigateByUrl('farmers');
  }
  

options = {
  layers: [
    tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  })
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


  map.locate({setView: true, maxZoom: 15});
  
  // map.on(L.Draw.Event.EDITED, function (e: any) {
  //   const type = (e as any).layerType,
  //     layer = (e as any).layer;
  //   if (type === 'polygon') {
  //     // here you got the polygon coordinates
  //      // layer.bindPopup(JSON.stringify(layer.toGeoJSON()) + '<br>' + layer._latlngs + '<br>' + map.getBounds().toBBoxString());
  //     $('#LatLng').val(JSON.stringify(layer.toGeoJSON()));
  //     layer.bindPopup(JSON.stringify(layer.toGeoJSON()));
  //     drawnItems.addLayer(layer);


  //       }
  //    });
     
      let drawnItems = L.featureGroup().addTo(map);
        
          //copied data from our database
     //let jsonDrawn='{"type":"Polygon","coordinates":[[[78.395888,17.442099],[78.395781,17.441837],[78.396324,17.441752],[78.39664,17.442156],[78.395888,17.442099]]]}'
       
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
