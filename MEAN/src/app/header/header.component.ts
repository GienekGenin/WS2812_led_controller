import {Component, OnInit} from '@angular/core';
import {SocketService} from '../socket.service';
import {UserService} from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private _sensorService: SocketService, private user: UserService) {
  }

  dataFromBot = {
    mode: ''
  };

  UIdata: any;

  lastCommand = {
    mode: 0
  };

  setMode(e) {
    if (e.checked === true) {
      this.UIdata = 'on';
    } else if (e.checked === false) {
      this.UIdata = 'off';
    } else {
      this.UIdata = e.value;
    }
    this._sensorService.emit('mode ' + this.user.username, {
      msg: this.UIdata
    });
  }

  // change event on mouse-move after testing
  slider(e) {
    if (this.UIdata !== e.value) {
      this.UIdata = e.value;
      this._sensorService.emit('mode ' + this.user.username, {
        msg: this.UIdata
      });
    }
  }

  ngOnInit() {
    this._sensorService.emit('Client_asking', {
      msg: 'Client to server, can u hear me server?'
    });
    this._sensorService.on('Server_asking', (data: any) => {
      console.log(data.msg);
      this._sensorService.emit('Client_response', {
        msg: 'Yes, its working for me!'
      });
      this._sensorService.on('Server_response', (_data: any) => {
        console.log(_data.msg);
      });
    });
    this._sensorService.on('Telegram_data', (data: any) => {
      // console.log(dataFromBot.msg);
      this.dataFromBot.mode = data.msg;
    });
    this._sensorService.on('Current mode', (data: any) => {
      this.lastCommand.mode = data.msg;
    });
    this._sensorService.emit('Last mode ' + this.user.username, {
      msg: 'Give me data'
    });
    this._sensorService.on('Last mode', (data: any) => {
      console.log(data.msg);
      this.lastCommand.mode = data.msg;
    });
  }
}
