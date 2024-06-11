import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: 'home', component: ProductListComponent },
  { path: 'product', component: ProductComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'cart', component: CartComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
