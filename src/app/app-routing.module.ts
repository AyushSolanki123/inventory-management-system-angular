import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Components/auth/auth.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'detail', component: ProductDetailComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
