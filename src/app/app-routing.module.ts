import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NouserComponent } from './nouser/nouser.component';
import { CreaterecordComponent } from './createrecord/createrecord.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';
import { ConfirmApptComponent } from './confirm-appt/confirm-appt.component';
import { NewticketComponent } from './newticket/newticket.component';
import { SetupApptComponent } from './setup-appt/setup-appt.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'norecord', component: NouserComponent },
  { path: 'createrecord', component: CreaterecordComponent },
  { path: 'setup', component: SetupApptComponent },
  { path: 'tickets', component: ViewticketsComponent },
  { path: 'tickets/:id', component: ViewticketsComponent },
  { path: 'viewtickets', redirectTo: 'tickets' },
  { path: 'viewtickets/:id', redirectTo: 'tickets/:id' },
  { path: 'confirmed', component: ConfirmApptComponent },
  { path: 'newticket', component: NewticketComponent },
  { path: 'newticket/:id', component: NewticketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
