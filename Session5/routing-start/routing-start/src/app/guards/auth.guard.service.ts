import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../Authentication.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthenticationService);

  return authService.isAuthenticated().then((loggedIn) => {
    if (loggedIn) return true;
    alert('Please login first');
    return false;
  });
};

export const AuthChildGuard: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthenticationService);

  return authService.isAuthenticated().then((loggedIn) => {
    if (loggedIn) return true;
    alert('Please login first');
    return false;
  });
};
