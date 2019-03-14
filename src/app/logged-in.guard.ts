import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(public localStore: LocalStoreService, public router: Router) {}

  canActivate(): boolean {
    if (!this.localStore.getCurrentUser()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
