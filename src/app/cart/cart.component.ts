import { Component } from '@angular/core';
import { CtxService } from '../ctx.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  //add ctxService
  ctx: any = {};

  //add int counter
  counter = 0;

  //get counter
  getCount() {
    return this.counter;
  }




  constructor(private ctxService: CtxService) {
    this.ctx = ctxService.ctx;
    this.counter = this.ctx.count;
  }


}
