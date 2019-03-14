import { Component, OnInit } from '@angular/core';
import { Ticket, TicketStatus } from '../models/ticket';
import { ActivatedRoute } from '@angular/router';
import { LocalStoreService } from '../local-store.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  open: Ticket[] = [];
  closed: Ticket[] = [];
  tickets: Ticket[];
  user = null;
  id = null;

  constructor(private localStore: LocalStoreService) { }

  ngOnInit() {
    this.user = this.localStore.getCurrentUser();
    const ids = this.localStore.getTicketIdsForUser(this.user.id);
    if (!!ids) {
      this.tickets = ids.map(this.localStore.getTicketById);
      this.open = this.tickets.filter(ticket => ticket.status === TicketStatus.OPENED);
      this.closed = this.tickets.filter(ticket => ticket.status !== TicketStatus.OPENED);
    }
  }

}
