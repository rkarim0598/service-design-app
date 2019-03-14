import { Injectable } from '@angular/core';
import { Ticket } from './models/ticket';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  ticketId = 0;
  userId = 0;

  saveTicket(ticket: Ticket): any {
    ticket.id = this.ticketId;
    this.ticketId ++;
    throw new Error('Method not implemented.');
  }

  getTicketById(id: number) {
    throw new Error('Method not implemented.');
    return {};
  }

  saveUser(user: any) {
    throw new Error('Method not implemented.');
  }

  getUserById(id: number){
    throw new Error('Method not implemented.');
  }

  getCurrentUser() {
    throw new Error('Method not implemented.');
  }

  setCurrentUser() {
    throw new Error('Method not implemented.');
  }

  getAgentId = () => 10542;

  constructor() { }
}
