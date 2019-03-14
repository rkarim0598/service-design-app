import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NouserComponent } from './nouser/nouser.component';
import { CreaterecordComponent } from './createrecord/createrecord.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';
import { ConfirmApptComponent } from './confirm-appt/confirm-appt.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'norecord', component: NouserComponent },
  { path: 'createrecord', component: CreaterecordComponent },
  { path: 'viewtickets', component: ViewticketsComponent },
  { path: 'confirmed', component: ConfirmApptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
