import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component/app.component';
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map.service';
import { ContourService } from './contour.service';
import { GradientService } from './gradient.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MapService, ContourService, GradientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
