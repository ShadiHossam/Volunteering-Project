import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  SiginInMessage = 'Please Login';
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      localStorage.getItem('UserName') ||
      localStorage.getItem('Corporate') != null
    )
      return true;
    else {
      this.router.navigate(['/signin']);
      alert(this.SiginInMessage);
      return false;
    }
  }
}
