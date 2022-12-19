import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  localProduct!: string | null;
  product!: Product;

  constructor() {
    this.localProduct = localStorage.getItem('product');
    if (this.localProduct !== null) {
      this.product = JSON.parse(this.localProduct);
    }
  }
}
