import { Component } from '@angular/core';
import { CtxService } from '../ctx.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //add ctxService
  ctx: any = {};

  //add products
  products : Product[] = [];

  //add cart
  cart = [];

  //get products
  getProducts() {
    return this.products;
  }

  //add to cart
  addToCart(product: Product) {

  }


  constructor(private ctxService: CtxService) {
    this.ctx = ctxService.ctx;
    this.products = this.ctx.products;
    
  }

}
