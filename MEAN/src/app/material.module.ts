import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatInputModule],
  exports: [MatButtonModule, MatInputModule],
})
export class MaterialModule {
}
