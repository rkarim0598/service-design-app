import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NouserComponent } from './nouser/nouser.component';
import { CreaterecordComponent } from './createrecord/createrecord.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';
import { ConfirmApptComponent } from './confirm-appt/confirm-appt.component';
import { NewticketComponent } from './newticket/newticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NouserComponent,
    CreaterecordComponent,
    ViewticketsComponent,
    ConfirmApptComponent,
    NewticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
