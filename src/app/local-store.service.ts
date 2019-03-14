import { Injectable } from '@angular/core';
import { Ticket } from './models/ticket';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  ticketId = 4589;
  userId = 2348;

  saveTicket(ticket: Ticket): any {
    ticket.id = '' + this.ticketId;
    this.ticketId ++;
    localStorage.setItem('ticket', '' + this.ticketId);
    console.log('Set ticket to ' + this.ticketId);
  }

  getTicketById(id: number) {
    let ticket = localStorage.getItem('ticket');
    console.log('fetched ticket id');
    return ticket;
  }

  saveUser(user: any) {
    localStorage.setItem('user', user);
    console.log('set user to ' + user);
  }

  getUserById(id: number){
    let user = localStorage.getItem('user');
    console.log('fetched user');
    return user;
  }

  getCurrentUser() {
    let user = localStorage.getItem('user');
    console.log('fetched current user');
    return user;
  }

  setCurrentUser(user) {
    localStorage.setItem('user', user);
    console.log('Set current user to ' + user);
  }

  getAgentId = () => 10542;

  constructor() { }
}
