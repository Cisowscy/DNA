import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DNArootRoutesModule } from './app-routing.module';
import { MaterialModule, OverlayContainer, FullscreenOverlayContainer} from '@angular/material';
import {RouterModule} from '@angular/router';

import { DNArootComponent, Wprowadzenie } from './app.component';
import { MatchGenComponent } from './match-gen/match-gen.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(DNArootRoutesModule),
    /*DNArootRoutesModule,*/
    MaterialModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    DNArootComponent,
    Wprowadzenie,
    MatchGenComponent
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
   entryComponents: [
     DNArootComponent
  ],
  bootstrap: [DNArootComponent]
})
export class DNArootModule { 
   constructor(private _appRef: ApplicationRef) { }
}