import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../local-store.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  phone: string;


  constructor(private localStore: LocalStoreService, private router: Router) { }

  ngOnInit() {
  }

  lookup() {
    if (!this.phone) {
      this.router.navigateByUrl('/norecord');
      return;
    }
    this.phone = this.phone.replace(new RegExp('[-\/. ]', 'g'), '');
    const user = this.localStore.getUserByPhone(this.phone);
    if (user) {
      this.localStore.setCurrentUser(user);
      this.router.navigateByUrl('/tickets');
    } else {
      this.router.navigateByUrl('/norecord');
    }
  }

}
