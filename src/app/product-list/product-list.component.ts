import { Component } from '@angular/core';
import { CtxService } from '../ctx.service';
import { Product } from '../product';
import { CartLine } from '../cart-line';
import { Router } from '@angular/router';

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

  //add router
  router: Router;

  //get products
  getProducts() {
    return this.products;
  }

  //add to cart
  addToCart(product: Product) {
    // add to cart 1 more product
    this.ctxService.addToCart(product, 1);
  }

  showProduct(product: Product) {
    //set current product
    this.ctxService.setCurrentProduct(product);
    //navigate to product component
    this.router.navigate(['product']);    
  }

  constructor(private ctxService: CtxService, private router1: Router) {
    this.products = this.ctxService.products;
    this.cart = this.ctxService.cart;
    this.router = router1;
  }

}
