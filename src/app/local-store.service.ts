import { Injectable } from '@angular/core';
import { Ticket } from './models/ticket';
import User from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  ticketId = 4589;
  userId = 2348;

  saveTicket(ticket: Ticket): string {
    ticket.id = '' + this.ticketId;
    this.ticketId ++;
    localStorage.setItem('ticket' + ticket.id, JSON.stringify(ticket));
    return ticket.id;
  }

  getTicketById(id: string): Ticket {
    return JSON.parse(localStorage.getItem('ticket' + id));
  }

  saveUser(user: User): string {
    user.id = '' + this.userId;
    this.userId ++;
    localStorage.setItem('user' + user.id, JSON.stringify(user));
    return user.id;
  }

  getUserById(id: string): User {
    return JSON.parse(localStorage.getItem('user' + id));
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getAgentId = () => 10542;

  constructor() { }
}
