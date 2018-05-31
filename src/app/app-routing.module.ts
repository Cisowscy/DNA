import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StartComponent } from './start.component';
import { HTTP404Component } from './http404.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  // { path: '', redirectTo: '/INFO', pathMatch: 'full' },
  { path: '**', component: HTTP404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
