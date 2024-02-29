import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadrComponent } from './components/headr/headr.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeadrComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule
  ],
  exports:[
    HeadrComponent
  ]
})
export class SharedModule { }
