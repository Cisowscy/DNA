import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenetykaDashboardComponent } from './genetyka/dashboard.component';
import { GenealogiaDashboardComponent } from './genealogia/dashboard.component';
import { NiewiedzaDashboardComponent } from './niewiedza/dashboard.component';
import { GenetykaNavComponent } from './genetyka/nav.component';
import { GenealogiaNavComponent } from './genealogia/nav.component';
import { NiewiedzaNavComponent } from './niewiedza/nav.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GenetykaNavComponent,
    GenealogiaNavComponent,
    NiewiedzaNavComponent,
    GenetykaDashboardComponent,
    GenealogiaDashboardComponent,
    NiewiedzaDashboardComponent
  ],
  exports: [
    GenetykaNavComponent,
    GenealogiaNavComponent,
    NiewiedzaNavComponent
  ]
})
export class FelietonyModule { }
