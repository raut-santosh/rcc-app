import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let ls = localStorage.getItem('directusCurrentUser');
    if(ls){
      let currentUser = JSON.parse(ls);
      if (currentUser && currentUser.data.access_token) {
        console.log('AuthGuard');
        return true;
      }
    }
    
    // console.log('user is not logged in');
    // // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}