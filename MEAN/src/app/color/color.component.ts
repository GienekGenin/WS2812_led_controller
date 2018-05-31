import {Component} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})

export class ColorComponent {

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
    }
  }
}
