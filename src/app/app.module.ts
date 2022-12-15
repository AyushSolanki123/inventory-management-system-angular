import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, NavbarComponent, ProductCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
