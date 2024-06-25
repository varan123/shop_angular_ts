import { Component } from '@angular/core';
import { CtxService } from '../ctx.service';
import { Product } from '../product';
import { CartLine } from '../cart-line';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //add products
  products: Product[] = [];

  //add cart
  cart: CartLine[] = [];

  //get products
  getProducts() {
    return this.products;
  }

  //add to cart
  addToCart(product: Product) {
    // add to cart 1 more product
    this.ctxService.addToCart(product, 1);
  }

  constructor(private ctxService: CtxService) {
    this.products = this.ctxService.products;
    this.cart = this.ctxService.cart;    
  }

}
