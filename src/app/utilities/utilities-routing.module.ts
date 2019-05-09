import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilitiesComponent } from './utilities/utilities.component';

const routes: Routes = [
  { path: 'utilities', component: UtilitiesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
