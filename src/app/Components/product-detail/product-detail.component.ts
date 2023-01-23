import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/Models/Product';
import { addProduct, removeProduct } from 'src/app/store/cart.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  localProduct!: string | null;
  product!: Product;
  count!: number;

  constructor(private store: Store) {
    this.count = 0;
    this.localProduct = localStorage.getItem('product');
    if (this.localProduct !== null) {
      this.product = JSON.parse(this.localProduct);
    }
  }
  public addProductToCart(product: Product) {
    this.count += 1;
    this.store.dispatch(addProduct(product));
  }

  public removeProductFromCart(product: Product) {
    this.count -= 1;
    this.store.dispatch(removeProduct(product));
  }
}
