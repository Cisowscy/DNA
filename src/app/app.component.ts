import {Component, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'info-wprowadzenie',
  styles: [
    `img {
      max-width: 100%;
    }`
  ],
  template: `    
         
      <img src="assets/img/logo.png">  
  `
})
export class Wprowadzenie { }

@Component({
  moduleId: module.id,
  selector: 'app-root',
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DNA4rootComponent {
  title = 'DNA4 - Genos Ethnos Logos [https://cisowscy.github.io/DNA4/]';
  navItems = [
    { name: 'obliczenia', route: 'obliczenia-DNA' }
    
  ];

  constructor(private _element: ElementRef) {

  }

  toggleFullscreen() {
    let elem = this._element.nativeElement.querySelector('.DNA4-root-okno');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }
}
