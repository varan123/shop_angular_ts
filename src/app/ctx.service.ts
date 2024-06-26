import { Injectable } from '@angular/core';
import { Product } from './product';
import { CartLine } from './cart-line';

@Injectable({
  providedIn: 'root'
})
export class CtxService {

  private _products: Product[] = [];
  private _cart: CartLine[] = [];

  get products(): Product[] {
    return this._products;
  }

  get cart(): CartLine[] {
    return this._cart;
  }

  addProduct(product: Product) {
    this._products.push(product);
  }

  addToCart(product: Product, quantity: number) {
    let cartLine = this._cart.find(line => line.id === product.id);
    if (cartLine) {
      cartLine.quantity += quantity;
    } else {
      this._cart.push(new CartLine(product.id, product.name, product.price, product.description, product.imageUrl, quantity));
    }
  }

  setToCart(product: Product, quantity: number) {
    let cartLine = this._cart.find(line => line.id === product.id);
    if (cartLine) {
      cartLine.quantity = quantity;
    } else {
      this._cart.push(new CartLine(product.id, product.name, product.price, product.description, product.imageUrl, quantity));
    }
  }

  deleteFromCartByProductId(productId: number) {
    this._cart = this._cart.filter(line => line.id !== productId);
  }
  
  constructor() {
    
  }
}
