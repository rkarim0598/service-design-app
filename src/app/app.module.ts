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
import { SetupApptComponent } from './setup-appt/setup-appt.component';
import { FormsModule } from '@angular/forms';
import { TicketListComponent } from './ticket-list/ticket-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NouserComponent,
    CreaterecordComponent,
    ViewticketsComponent,
    ConfirmApptComponent,
    NewticketComponent,
    SetupApptComponent,
    TicketListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
