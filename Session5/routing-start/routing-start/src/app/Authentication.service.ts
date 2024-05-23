import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  loggedIn = false;

  Login() {
    this.loggedIn = true;
  }

  Logout() {
    this.loggedIn = false;
  }

  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });

    return promise;
  }
}
