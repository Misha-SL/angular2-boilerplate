import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    console.log("tokenNotExpired", tokenNotExpired());
    if (tokenNotExpired()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}