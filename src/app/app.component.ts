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
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('pol');
  }

  useLanguage(language: string) {
      this.translate.use(language);
  }
}

