import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { SearchFilterProductsComponent } from './Components/search-filter-products/search-filter-products.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { AuthComponent } from './Components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    ProductCardComponent,
    SearchFilterProductsComponent,
    ProductDetailComponent,
    AuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
