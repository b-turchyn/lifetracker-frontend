import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BucketsComponent } from './buckets/buckets.component';

const routes: Routes = [
  { path: 'buckets', component: BucketsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
