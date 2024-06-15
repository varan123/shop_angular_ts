import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CtxService {

  private _ctx: any = {};

  get ctx(): any {
    return this._ctx;
  }

  set ctx(value: any) {
    this._ctx = value;
  }
  
  constructor() {
    
  }
}
