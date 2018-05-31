import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'DNA-C-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
      translate.setDefaultLang('pol');
  }

  useLanguage(language: string) {
      this.translate.use(language);
  }
}

