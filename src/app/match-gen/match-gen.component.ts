import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-match-gen',
  templateUrl: './match-gen.component.html',
  styleUrls: ['./match-gen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatchGenComponent implements OnInit {
  activeTabIndex = 0;
  

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'key-up4',
  template: `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v4 {
  value = '';
  update(value: string) { this.value = value; }
}