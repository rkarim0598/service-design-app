import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NouserComponent } from './nouser/nouser.component';
import { CreaterecordComponent } from './createrecord/createrecord.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';
import { ConfirmApptComponent } from './confirm-appt/confirm-appt.component';
import { NewticketComponent } from './newticket/newticket.component';
import { SetupApptComponent } from './setup-appt/setup-appt.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'norecord', component: NouserComponent },
  { path: 'createrecord', component: CreaterecordComponent },
  { path: 'setup', component: SetupApptComponent, canActivate: [LoggedInGuard] },
  { path: 'tickets', component: ViewticketsComponent, canActivate: [LoggedInGuard] },
  { path: 'ticket/:id', component: ViewticketsComponent, canActivate: [LoggedInGuard] },
  { path: 'confirmed', component: ConfirmApptComponent, canActivate: [LoggedInGuard] },
  { path: 'newticket', component: NewticketComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
