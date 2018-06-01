import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatInputModule, MatSliderModule, MatRadioModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatSliderModule, MatRadioModule, MatSlideToggleModule],
  exports: [MatButtonModule, MatInputModule, MatSliderModule, MatRadioModule, MatSlideToggleModule],
})
export class MaterialModule {
}
