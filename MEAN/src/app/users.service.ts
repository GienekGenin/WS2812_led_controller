import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  username;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(_username) {
    this.isUserLoggedIn = true;
    this.username = _username;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}
