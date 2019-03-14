import { Injectable } from '@angular/core';
import { Ticket } from './models/ticket';
import User from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  ticketId = 4589;
  userId = 2348;

  saveTicket(ticket: Ticket): Ticket {
    if (!ticket.id) {
      ticket.id = '' + this.ticketId;
      this.ticketId ++;
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
    user.id = '' + this.userId;
    this.userId ++;
    localStorage.setItem('user' + user.id, JSON.stringify(user));
    return user;
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
