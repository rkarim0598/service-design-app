import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NouserComponent } from './nouser/nouser.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'norecord', component: NouserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
