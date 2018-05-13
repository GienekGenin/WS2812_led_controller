import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SocketService} from '../socket.service';
import {UserService} from '../users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private _sensorService: SocketService, private user: UserService) {
  }

  users = [];

  loginUser(e) {
    console.log(e.target.elements);
    const userName = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    if ((userName === this.users[0].username && password === this.users[0].pass) ||
      (userName === this.users[1].username && password === this.users[1].pass)) {
      this.router.navigate(['/board']);
      this.user.setUserLoggedIn(userName);
    } else {
      alert('Incorrect username or password');
    }
  }

  ngOnInit() {
    this._sensorService.emit('users_data', {
      msg: 'Requesting users data'
    });
    this._sensorService.on('receive_users', (data: any) => {
      this.users = data.msg;
    });
  }
}
