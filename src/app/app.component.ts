import { Component } from '@angular/core';
import { CtxService } from './ctx.service';
import data from './data/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //add ctxService
  ctx: any = {};

  //add int counter
  counter = 0;

  //add products
  products = data['products'];

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
  }

}
