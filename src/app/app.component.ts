import { Component } from '@angular/core';
import { CtxService } from './ctx.service';
import data from './data/data.json';
import { Product } from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //add ctxService
  ctx: any = {};

  //add int counter
  counter: number = 0;

  //add products
  products_json = data['products'];

  //add increment function
  increment() {
    this.counter++;
    //get count from ctx
    this.ctx.count = this.counter;
  }

  getCount() {
    return this.counter;
  }

  

  title = 'shop_angular_v1';

  constructor(private ctxService: CtxService) {
    this.ctx = ctxService.ctx;

    //parse json data loop
    this.ctx.products = [];

    for (let i = 0; i < this.products_json.length; i++) {
      let product = this.products_json[i];
      this.ctx.products.push(new Product(product.id, product.name, product.price, product.description, product.img));
    }
  }

}
