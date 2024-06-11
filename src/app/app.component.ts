import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //add int counter
  counter = 0;
  //add increment function
  increment() {
    this.counter++;
  }

  getCount() {
    return this.counter;
  }



  title = 'shop_angular_v1';

  constructor(public dialog: MatDialog) { }

}
