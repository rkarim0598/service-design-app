import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket';
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
  user = null;
  id = null;

  constructor(private localStore: LocalStoreService) { }

  ngOnInit() {
    this.user = this.localStore.getCurrentUser();
  }

}
