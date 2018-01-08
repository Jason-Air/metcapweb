import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private ms: MapService) { }

  ngOnInit() {
    //document.getElementsByTagName('nav')[0].style.height = window.innerHeight.toString() + 'px';
  }

  status: boolean = false;
  menuElmStatus: Array<boolean> = [false, false, false];

  menuOpen(): void {
    this.status = !this.status;
  }

  addContourLayer(layerId) {
    this.ms.drawContour(layerId);
    this.menuElmStatus[layerId] = this.ms.addedLayers.includes(layerId);
  }

  removeContourLayer(layerId) {
    this.ms.clearContour(layerId);
    this.menuElmStatus[layerId] = this.ms.addedLayers.includes(layerId);
  }

  addTemperatureLayer(layerId) {
    this.ms.drawGradient(layerId);
    this.menuElmStatus[layerId] = this.ms.addedLayers.includes(layerId);
  }

  removeTemperatureLayer(layerId) {
    this.ms.removeGradient(layerId);
    this.menuElmStatus[layerId] = this.ms.addedLayers.includes(layerId);
  }
}
