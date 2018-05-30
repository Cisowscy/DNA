import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import {TranslateModule} from '@ngx-translate/core';

import { AppMaterialsModule } from './app.materials.module';

import { FelietonyModule } from './felietony/felietony.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot(),
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    ClarityModule,
    FelietonyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
