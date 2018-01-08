import { Injectable } from '@angular/core';
import { sicaklik } from './data/sicaklik';

@Injectable()
export class GradientService {

  constructor() { }

  getTemperature(){
    return sicaklik;
  }

}
