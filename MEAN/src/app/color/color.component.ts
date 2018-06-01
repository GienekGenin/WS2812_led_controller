import {Component, OnInit} from '@angular/core';
import {SocketService} from '../socket.service';
import {UserService} from '../users.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})

export class ColorComponent implements OnInit {
  constructor(private _sensorService: SocketService, private user: UserService) {
  }

  previousColor = null;

  public arrayColors: any = {
    color: '#2883e9',
  };

  public selectedColor = 'color1';

  sendColor(color: any) {
    if (color === undefined) {
      return;
    }
    if (this.previousColor !== color) {
      this.previousColor = color;
      console.log(color);
      this._sensorService.emit('mode ' + this.user.username, {
        msg: color
      });
    }
  }

  ngOnInit() {
    // this._sensorService.on('******', (data: any) => {
    //   console.log(data.msg);
    // });
  }
}
