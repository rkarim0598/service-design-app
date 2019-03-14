import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-confirm-appt',
  templateUrl: './confirm-appt.component.html',
  styleUrls: ['./confirm-appt.component.scss']
})
export class ConfirmApptComponent implements OnInit {
  location = localStorage.getItem('location') != 'undefined' ? localStorage.getItem('location') : 'Select a store!';
  date = localStorage.getItem('date') != 'undefined' ? localStorage.getItem('date') : "Select a date";
  time = localStorage.getItem('time') != 'undefined' ? localStorage.getItem('time') : "Select a time slot!";
  submitted = false;
  email = JSON.parse(localStorage.getItem('user')).email;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.submitted = true;
  }

  lastEmail() {
    return this.email;
  }
}
