import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Wprowadzenie } from './app.component';
/*
const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class DNA4rootRoutesModule { } */

export const DNA4rootRoutesModule: Routes = [
  { path: '', component: Wprowadzenie }
];
