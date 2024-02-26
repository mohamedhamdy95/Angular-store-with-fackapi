import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadrComponent } from './components/headr/headr.component';


@NgModule({
  declarations: [
    HeadrComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeadrComponent
  ]
})
export class SharedModule { }
