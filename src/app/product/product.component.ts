import { Component } from '@angular/core';
import { CtxService } from '../ctx.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  _product: Product;

  constructor(private ctxService: CtxService) {
    this._product = this.ctxService.currentProduct;
  }

  get product() {
    return this._product;
  }

  addToCart() {
    this.ctxService.addToCart(this.product, 1);
  }

  setToCart(quantity: number) {
    this.ctxService.setToCart(this.product, quantity);
  }

  getQuantity() {
    let cartLine = this.ctxService.cart.find(line => line.id === this.product.id);
    return cartLine ? cartLine.quantity : 0;
  }

}
