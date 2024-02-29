import { NgModule } from '@angular/core';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AllproductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports:[
    AllproductsComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
