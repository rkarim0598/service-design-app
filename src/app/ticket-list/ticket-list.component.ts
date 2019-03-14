import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.user = {name: 'Dierre'};
    }
  }

}
