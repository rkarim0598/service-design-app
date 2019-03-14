import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-viewtickets',
  templateUrl: './viewtickets.component.html',
  styleUrls: ['./viewtickets.component.scss']
})
export class ViewticketsComponent implements OnInit {
  editing = false;
  device: string;

  constructor() { }

  ngOnInit() {
  }

  log = (x) => console.log(x);

}
