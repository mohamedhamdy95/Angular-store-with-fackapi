import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';



@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  productList:any[]=[]
  constructor(private ProductsService:ProductsService){}
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts():void{
    this.ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        this.productList = res
        console.log(this.productList)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
