import { Injectable } from '@angular/core';
import { Ticket } from './models/ticket';
import User from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  getNextUserId() {
    const next = JSON.parse(localStorage.getItem('userId')) || 2348;
    localStorage.setItem('userId', JSON.stringify(next + 1));
    return next;
  }

  getNextTicketId() {
    const next = JSON.parse(localStorage.getItem('ticketId')) || 4949;
    localStorage.setItem('ticketId', JSON.stringify(next + 1));
    return next;
  }

  saveTicket(ticket: Ticket): Ticket {
    if (!ticket.id) {
      ticket.id = '' + this.getNextTicketId();
    }
    localStorage.setItem('ticket' + ticket.id, JSON.stringify(ticket));
    let tickets: string[] = [...(this.getTicketIdsForUser(ticket.userId) || []), ticket.id];
    tickets = [... Array.from(new Set<string>(tickets))];
    localStorage.setItem('ticketsFor' + ticket.userId, JSON.stringify(tickets));
    return ticket;
  }

  getTicketIdsForUser(userId: string): string[] {
    return JSON.parse(localStorage.getItem('ticketsFor' + userId));
  }

  getTicketById(id: string): Ticket {
    return JSON.parse(localStorage.getItem('ticket' + id));
  }

  saveUser(user: User): User {
    if (!user.id) {
      user.id = this.getNextUserId();
    }
    const lookup = JSON.parse(localStorage.getItem('userLookup')) || {};
    lookup[user.phone] = user.id;
    localStorage.setItem('userLookup', JSON.stringify(lookup));
    localStorage.setItem('user' + user.id, JSON.stringify(user));
    return user;
  }

  getUserById(id: string): User {
    return JSON.parse(localStorage.getItem('user' + id));
  }

  getUserByPhone(phone: string): User {
    const lookup = JSON.parse(localStorage.getItem('userLookup')) || {};
    return this.getUserById(lookup[phone]);
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
