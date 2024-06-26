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

  //get cart
  getCart() {
    return this.cart;
  }

  removeFromCart(productId: number) {
    this.ctxService.deleteFromCartByProductId(productId);
    this.updateCart();
  }

  updateCart() {
    this.cart = this.ctxService.cart;
  }
  
  constructor(private ctxService: CtxService) {
    this.cart = this.ctxService.cart;
  }




}
