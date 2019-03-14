import { Component, OnInit } from '@angular/core';
import { Ticket, TicketStatus } from '../models/ticket';
import { LocalStoreService } from '../local-store.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-viewtickets',
  templateUrl: './viewtickets.component.html',
  styleUrls: ['./viewtickets.component.scss']
})
export class ViewticketsComponent implements OnInit {
  editing = false;
  device: string;
  ticket: Ticket;
  description: string;
  previousAttempts: string;
  solution: string;
  submitted = false;

  constructor(private route: ActivatedRoute, private localStore: LocalStoreService, private router: Router) { }

  ngOnInit() {
    const ticketId = this.route.snapshot.paramMap.get('id');
    this.ticket = this.localStore.getTicketById(ticketId);
    if (!this.ticket) {
      return;
    }
    this.device = this.ticket.device;
    this.description = this.ticket.description;
    this.previousAttempts = this.ticket.previousAttempts;
    this.solution = this.ticket.solution;
  }

  close() {
    this.submitted = true;
    this.ticket.status = TicketStatus.CLOSED;
    this.ticket.solution = this.solution;
    this.localStore.saveTicket(this.ticket);
    this.router.navigate(['/ticket/' + this.ticket.id, {refresh: (new Date()).getTime()}]);
    window.location.reload();
  }
}
