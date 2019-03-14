import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../local-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createrecord',
  templateUrl: './createrecord.component.html',
  styleUrls: ['./createrecord.component.scss']
})
export class CreaterecordComponent implements OnInit {
  name: string;
  phone: string;
  email: string;

  constructor(private localStore: LocalStoreService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    let user = {
      name: this.name,
      phone: this.phone.replace(new RegExp('[-\/. ]', 'g'), ''),
      email: this.email
    };
    user = this.localStore.saveUser(user);
    this.localStore.setCurrentUser(user);
    this.router.navigateByUrl('/tickets');
  }
}
