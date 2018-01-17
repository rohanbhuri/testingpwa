import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mapboxgl = window['mapboxgl'];
  steerpath = window['steerpath'];

  constructor(public navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.startMap();

  }

  startMap() {
    // initialise Mapbox
    this.mapboxgl.accessToken = '';
    // tslint:disable-next-line:max-line-length
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOiJiYXNlOnI7c3RlZXJwYXRoX3N0YXRpYzpyO3N0ZWVycGF0aF9keW5hbWljOnIiLCJtZXRhQWNjZXNzIjoieSIsImp0aSI6IjhlNTA2OWRhLTViNDEtNGYxZS1iYjYzLTE3NmE0Y2FjMDcyOCIsInN1YiI6InN0ZWVycGF0aCIsImVkaXRSaWdodHMiOiIiLCJlaWRBY2Nlc3MiOiJ5In0.in8zIUm_ZlVhmYPhRMsMxShlqCH0nJnof0kRlWyKuQw';
    const styleUrl = 'https://mapdata.eu.steerpath.com/style/web.json?access_token=' + token;

    const mapboxMap = new this.mapboxgl.Map({
      container: 'mapboxMap',
      style: styleUrl,
      center: [24.81249496, 60.22095443],
      zoom: 18,
      bearing: 0,
      pitch: 0
    });

    // options for SteerpathMap class
    const options = {
      inspectionZoomLevel: 15,
      inspectionBoundaries: 0.5,
      queryOnceMapLoad: true
    };

    // create instance of SteerpathMap
    const steerpathMap = new this.steerpath.SteerpathMap(mapboxMap, options);
    // create floor switcher control and add it to the map
    const floorSwitcher = new this.steerpath.FloorSwitcherControl(steerpathMap);
    mapboxMap.addControl(floorSwitcher, 'bottom-right');
  }

}
