import { Component } from '@angular/core';
import { CtxService } from '../ctx.service';
import { CartLine } from '../cart-line';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  //add cart
  cart: CartLine[] = [];
  products: Product[] = [];
  
  //get cart
  getCart() {
    return this.cart;
  }

  //get total price
  getTotalPrice() {
    let total = 0;
    this.cart.forEach((cartLine) => {
      total += cartLine.price * cartLine.quantity;
    });
    return total;
  }

  removeFromCart(productId: number) {
    this.ctxService.deleteFromCartByProductId(productId);
    this.updateCart();
  }

  updateCart() {
    this.cart = this.ctxService.cart;
  }

  updateCartLineQuantity(productId: number, quantity: number) {
    this.ctxService.setToCartByProductId(productId, quantity);
  }
  
  constructor(private ctxService: CtxService) {
    this.cart = this.ctxService.cart;
    this.products = this.ctxService.products
  }




}
