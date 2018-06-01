import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatInputModule, MatSliderModule, MatRadioModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatSliderModule, MatRadioModule],
  exports: [MatButtonModule, MatInputModule, MatSliderModule, MatRadioModule],
})
export class MaterialModule {
}
