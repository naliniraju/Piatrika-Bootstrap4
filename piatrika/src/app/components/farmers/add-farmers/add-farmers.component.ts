import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { Router } from '@angular/router';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { FormGroup } from '@angular/forms';
import { Village } from 'src/app/models/village';
import { VillageService } from 'src/app/services/village/village.service';
import { latLng, Map, tileLayer } from 'leaflet';
//import * as L from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import { LatLngExpression } from 'leaflet'
import * as $ from 'jquery'
declare const L: any; // --> Works
import 'leaflet-draw';
@Component({
  selector: 'app-add-farmers',
  templateUrl: './add-farmers.component.html',
  styleUrls: ['./add-farmers.component.css']
})
export class AddFarmersComponent implements OnInit {

  farmer: Farmer = new Farmer();
  submitted = false;
  farmers: Farmer[];
  uploadForm: FormGroup;
  villages: Village[];
  url: string | ArrayBuffer;
  map: L.Map;
  color='#128128';
  public formGroup:FormGroup;
  // latitude=this.farmerService.getFarmerDetails().subscribe(data=>this.latitude=data)[10];
  // longitude=this.farmerService.getFarmerDetails().subscribe(data=>this.longitude=data)[11];



  constructor(
    private farmerService: FarmersService,
    private villageService: VillageService,
    private router: Router,
      ) {
  }
  ngOnInit() {
    this.villageService.getVillageDetails().subscribe(data => this.villages = data);
      }

  newFarmer(): void {
    this.submitted = false;
    this.farmer = new Farmer();
  }

  addFarmerDetail() {
    this.submitted = true;
    this.save();
  }

  save(): void {
    console.log(this.farmer);
    this.farmerService.addFarmerDetail(this.farmer)
      .subscribe();
    this.getFarmerDetails();
    this.router.navigate(['/farmers']);
  }

  getFarmerDetails() {
    return this.farmerService.getFarmerDetails()
      .subscribe(
        farmers => {
          console.log(farmers);
          this.farmers = farmers;
        }
      );
  }
  onFileSelect(event: { target: { files: Blob[]; }; }) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);//read file as data url

      reader.onload = (event) => {//called once readAsDataURL is completed
        // this.url=event.target.result;
        this.url = reader.result;
      }
    }

  }
  drawOptions = {
    position: 'topright',
    draw: {
      polygon: {
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
      console.log(e.message);
    }
  
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
  
    map.locate({setView: true, maxZoom: 18});
    map.on(L.Draw.Event.CREATED, function (e: any) {
      const type = (e as any).layerType,
        layer = (e as any).layer;

      if (type === 'polygon') {
        // here you got the polygon coordinates
        //const polygonCoordinates = layer._latlngs;
       // console.log(polygonCoordinates);
        //layer.bindPopup(JSON.stringify(layer.toGeoJSON()) + '<br>' + layer._latlngs + '<br>' + map.getBounds().toBBoxString());
      
        $('#LatLng').val(JSON.stringify(layer.toGeoJSON()));
        
      }
    
    });

  }

 }


