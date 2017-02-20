import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DNA4rootRoutesModule } from './app-routing.module';
import { MaterialModule, OverlayContainer, FullscreenOverlayContainer} from '@angular/material';
import { RouterModule } from '@angular/router';

import { DNA4rootComponent, Wprowadzenie } from './app.component';
import { MatchGenComponent } from './match-gen/match-gen.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(DNA4rootRoutesModule),
    /*DNA4rootRoutesModule,*/
    MaterialModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    DNA4rootComponent,
    Wprowadzenie,
    MatchGenComponent
  ],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer }
  ],
  entryComponents: [
    DNA4rootComponent
  ],
  bootstrap: [DNA4rootComponent]
})
export class DNA4rootModule {
  constructor(private _appRef: ApplicationRef) { }
}
