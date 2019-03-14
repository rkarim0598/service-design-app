import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NouserComponent } from './nouser/nouser.component';
import { CreaterecordComponent } from './createrecord/createrecord.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';
import { NewticketComponent } from './newticket/newticket.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'norecord', component: NouserComponent },
  { path: 'createrecord', component: CreaterecordComponent },
  { path: 'viewtickets', component: ViewticketsComponent },
  { path: 'newticket', component: NewticketComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
