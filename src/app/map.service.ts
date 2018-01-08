import { Injectable } from '@angular/core';
import L from 'leaflet';
import { ContourService } from './contour.service';
import { layers } from './data/layers';
import { element } from 'protractor';
import bezier from '@turf/bezier-spline';
import { GradientService } from './gradient.service';
import './script/leaflet-idw.js';



@Injectable()
export class MapService {

  map: any;
  layer: any;
  myLayers: any = [];
  addedLayers: any = [];


  constructor(private cService: ContourService, private tService: GradientService) { }

  init() {
    var map = L.map('map').setView([39.0, 35.5], 4);
    this.map = map;
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    map.zoomControl.setPosition('topright');
  }

  drawContour(layerId): void {
    if (this.addedLayers.includes(layerId)) return;

    var line, curved, iconContourValue = [], contourValueCoords, contours;
    this.layer = [];
    var lineOptions = {
      color: 'black',
      weight: 1,
      opacity: 1,
      smoothFactor: 0
    };

    contours = this.cService.getContours(layerId);

    for (var i = 0; i < contours.length; i++) {
      line = contours[i];
      if (contours[i].geometry.coordinates.length > 0) {
        curved = bezier(line);
        this.layer.push(L.geoJSON(curved, lineOptions));

        iconContourValue[i] = L.divIcon({ className: 'divIconContourValue', html: contours[i].properties.contourValue });
        contourValueCoords = Math.ceil(contours[i].geometry.coordinates.length / 2);
        this.layer.push(L.marker(L.latLng(contours[i].geometry.coordinates[contourValueCoords][1], contours[i].geometry.coordinates[contourValueCoords][0]), { icon: iconContourValue[i] }));
      }
    }

    this.myLayers.push(L.layerGroup(this.layer));
    this.myLayers[this.myLayers.length - 1].addTo(this.map);
    this.addedLayers.push(layerId);
  }

  clearContour(layerId) {
    if (!this.addedLayers.includes(layerId)) return;

    var clearLayer: number;

    for (var i = 0; i < this.addedLayers.length; i++) {
      if (this.addedLayers[i] == layerId) {
        clearLayer = i;
        this.addedLayers.splice(i, 1);
        break;
      }
    }
    this.map.removeLayer(this.myLayers[clearLayer]);
    this.myLayers.splice(clearLayer, 1);
  }

  drawGradient(layerId) {
    if (this.addedLayers.includes(layerId)) return;
    this.layer = [];
    var sicaklik = this.tService.getTemperature();
    console.log(sicaklik);
    this.layer.push(L.idwLayer(sicaklik, {
      opacity: 0.3,
      maxZoom: 18,
      cellSize: 5,
      exp: 1,
      max: 10
    }));

    this.myLayers.push(L.layerGroup(this.layer));
    this.myLayers[this.myLayers.length - 1].addTo(this.map);
    this.addedLayers.push(layerId);
  }

  removeGradient(layerId) {
    if (!this.addedLayers.includes(layerId)) return;

    var clearLayer: number;

    for (var i = 0; i < this.addedLayers.length; i++) {
      if (this.addedLayers[i] == layerId) {
        clearLayer = i;
        this.addedLayers.splice(i, 1);
        break;
      }
    }
    this.map.removeLayer(this.myLayers[clearLayer]);
    this.myLayers.splice(clearLayer, 1);
  }

}
