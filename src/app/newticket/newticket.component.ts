import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { LocalStoreService } from '../local-store.service';
import { TicketStatus } from '../models/ticket';

@Component({
  selector: 'app-newticket',
  templateUrl: './newticket.component.html',
  styleUrls: ['./newticket.component.scss']
})
export class NewticketComponent implements OnInit {
  device: string;
  description: string;
  prevattemp: string;
  agentid: number;

  constructor(private router: Router, private localStore: LocalStoreService) { }

  ngOnInit() {
  }

  submit() {
    const ticket =  this.localStore.saveTicket({
      device: this.device,
      description: this.description,
      previousAttempts: this.prevattemp,
      agentId: this.agentid,
      status: TicketStatus.OPENED,
      userId: this.localStore.getCurrentUser().id
    });
    this.router.navigateByUrl('/ticket/' + ticket.id);
  }

}
