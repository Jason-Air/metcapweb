import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    this.fitMapAndMenuToScreen();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.fitMapAndMenuToScreen();
  }
  
  fitMapAndMenuToScreen() {
    document.getElementsByTagName('nav')[0].style.height = window.innerHeight-10 + 'px';
    document.getElementById('map').style.width = window.innerWidth.toString() + 'px';
    document.getElementById('map').style.height = window.innerHeight.toString() + 'px';
  }
}
