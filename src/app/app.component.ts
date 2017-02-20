import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

@Component({
  selector: 'info-wprowadzenie',
  template: `
    <br> <br> <br> <br>
    <md-card>
      <md-card-header>
        <md-card-title>hurra 1 krok za mna </md-card-title>
        <md-card-subtitle>Jest chowane Menu i działa tryb pełnoekranowy</md-card-subtitle>
      </md-card-header>
      <img md-card-image src="assets/img/logo.png">
      <md-card-content>
        <p>To jest moja pierwsza apka w Angular przy użyciu Google TypeScript Angular 4.0.7, w zasadzie niewiele wiem jeszcze ale będzie lepiej :)</p>
      </md-card-content>
    <md-card-actions>
      <button md-button>NIEBAWEM ZMIANY :)</button>
      <button md-button>KLAWISZ NIE DZIAŁA</button>
    </md-card-actions>
</md-card>
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
    { name: 'GenMatch', route: 'autocomplete' },
    { name: 'DNA4', route: 'button' }
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
