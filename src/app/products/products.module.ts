import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllproductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AllproductsComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
