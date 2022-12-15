import { Component } from '@angular/core';
import axios from 'axios';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products!: [Product];
  loading!: boolean;

  constructor() {
    this.loading = true;
    this.getAllProducts();
  }

  getAllProducts(): void {
    const requestOptions = {
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
    };

    axios(requestOptions)
      .then((response) => {
        this.products = response.data;
        this.loading = false;
        console.log(this.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
