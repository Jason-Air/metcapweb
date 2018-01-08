import { Injectable } from '@angular/core';
import { yerIzobar } from './data/yerizobar';
import { kontur850 } from './data/850kontur';
import { layers } from './data/layers';

@Injectable()
export class ContourService {

  constructor() { }

  getContours(level): any {
    return layers.filter(layer=>layer.layerId==level)[0].layerName;  
  }
}
