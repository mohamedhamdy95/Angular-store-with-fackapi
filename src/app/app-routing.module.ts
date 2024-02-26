import { NgModule } from '@angular/core';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:"full"},
  {path:'products',component:AllproductsComponent,title:"Products"},
  {path:'details',component:ProductDetailsComponent,title:"Products Details"},
  {path:'cart',component:CartComponent,title:"Cart"},
  {path:'**',redirectTo:'products',pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }