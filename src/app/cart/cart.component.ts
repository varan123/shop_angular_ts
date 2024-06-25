import { Component } from '@angular/core';
import { CtxService } from '../ctx.service';
import { CartLine } from '../cart-line';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  //add cart
  cart: CartLine[] = [];

  //add int counter
  counter = 0;

  //get counter
  getCount() {
    return this.counter;
  }




  constructor(private ctxService: CtxService) {
    this.cart = this.ctxService.cart;
    this.counter = this.ctxService.cart.length;
  }


}
