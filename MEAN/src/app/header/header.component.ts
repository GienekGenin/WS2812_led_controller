import {Component, OnInit} from '@angular/core';
import {SocketService} from '../socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _sensorService: SocketService) {
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
  }
}
