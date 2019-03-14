import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-appt',
  templateUrl: './setup-appt.component.html',
  styleUrls: ['./setup-appt.component.scss']
})
export class SetupApptComponent implements OnInit {
  time = "Possible Times";
  location = "";
  date = "3/14/2019";
  locations = [
      "345 Hamilton Ave, Palo Alto, CA",
      "389 Main St, San Carlos"
  ]
  zip="94020";

  constructor() { }

  ngOnInit() {
  }

  setTime(str) {
    this.time = str;
    localStorage.setItem('time', this.time);
  }

  onDateSelect(event) {
    console.log(event);
    this.date = event.month + "/" + event.day + "/" + event.year;
    localStorage.setItem('date', this.date);
  }

  setLocation(index) {
    console.log(index);
    this.location = this.locations[index];
    localStorage.setItem('location', this.location);
  }

  zipSearch(event) {
    this.zip = (<HTMLInputElement>event.target).value;
    console.log(this.zip);
    localStorage.setItem('zip', this.zip);
  }

}
