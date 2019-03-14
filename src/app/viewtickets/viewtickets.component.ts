import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket';
import { LocalStoreService } from '../local-store.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

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
  submitted = false;

  constructor(private route: ActivatedRoute, private localStore: LocalStoreService) { }

  ngOnInit() {
    const ticketId = this.route.snapshot.paramMap.get('id');
    this.ticket = this.localStore.getTicketById(ticketId);
    if (!this.ticket) {
      return;
    }
    this.device = this.ticket.device;
    this.description = this.ticket.description;
    this.previousAttempts = this.ticket.previousAttempts;
  }
  submit() {
    this.submitted = true;
  }
  log = (x) => console.log(x);

}