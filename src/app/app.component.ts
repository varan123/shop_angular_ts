import { Component } from '@angular/core';
import { CtxService } from './ctx.service';
import data from './data/data.json';
import { Product } from './product';
import { CartLine } from './cart-line';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cart: CartLine[] = [];
  products: Product[] = [];
  
  //add int counter
  counter: number = 0;

  //add products
  products_json = data['products'];

  //add increment function
  increment() {
    this.counter++;
    
  }

  getCount() {
    return this.ctxService.cart.length;
  }

  title = 'shop_angular_v1';

  constructor(private ctxService: CtxService) {
    //parse json data loop
    this.products = [];

    for (let i = 0; i < this.products_json.length; i++) {
      let product_from_json = this.products_json[i];
      let product: Product = new Product(product_from_json.id, product_from_json.name,
        product_from_json.price, product_from_json.description, product_from_json.img);
      this.products.push(product);
      ctxService.addProduct(product);
    }
  }

}
