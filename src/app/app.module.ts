import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import ngx-translate and the http loader
import {TranslateCompiler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { PruningTranslationLoader } from './pruning-loader';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';

// local
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialsModule } from './app.materials.module';
import { StartComponent } from './start.component';
import { HTTP404Component } from './http404.component';
import { FelietonyModule } from './felietony/felietony.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HTTP404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    ClarityModule,
    NgbModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      } // ,
      // compiler: {
      //     provide: TranslateCompiler,
      //     useClass: TranslateMessageFormatCompiler
      // }
    }),
    TranslateModule.forRoot(),
    FelietonyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
// export function HttpLoaderFactory(http: HttpClient) {
//     return new PruningTranslationLoader(http);
//     return new TranslateHttpLoader(http);
// }


