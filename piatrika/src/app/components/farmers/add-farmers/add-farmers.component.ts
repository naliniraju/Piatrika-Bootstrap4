import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { Router } from '@angular/router';
import { FarmersService } from 'src/app/services/farmers/farmers.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Village } from 'src/app/models/village';
import { VillageService } from 'src/app/services/village/village.service';
declare let L;
declare var $: any;
import '../../../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js';


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


  private piatrikaUrl = 'http://localhost:3000/farmers';

  constructor(
    private farmerService: FarmersService,
    private villageService: VillageService,
    private router: Router,
    private location: Location,
    private http: HttpClient
  ) {
  }
  ngOnInit() {
    this.villageService.getVillageDetails().subscribe(data => this.villages = data);
    this.setLocation();

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
  onFileSelect(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);//read file as data url

      reader.onload = (event) => {//called once readAsDataURL is completed
        // this.url=event.target.result;
        this.url = reader.result;
      }
    }

  }
  setLocation() {
    navigator.geolocation.getCurrentPosition(function (location) {
      let mapCenter = new L.LatLng(location.coords.latitude, location.coords.longitude);
      // var map = L.map('mapid', { drawControl: true }).setView([25, 25], 2);

      let map = L.map('mapid').setView(mapCenter, 18);


      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);


      var marker = L.marker(mapCenter).addTo(map);

      var updateMarker = function (lat, lng) {
        marker
          .setLatLng([lat, lng])
          .bindPopup("Your location :  " + marker.getLatLng().toString())
        //  .openPopup();
        return false;
      };
      map.on('click', function (e) {
        $('#latitude').val(e.latlng.lat);
        $('#longitude').val(e.latlng.lng);
        updateMarker(e.latlng.lat, e.latlng.lng);
      });

      var updateMarkerByInputs = function () {
        return updateMarker($('#latitude').val(), $('#longitude').val());
      }
      $('#latitude').on('input', updateMarkerByInputs);
      $('#longitude').on('input', updateMarkerByInputs);

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






}


