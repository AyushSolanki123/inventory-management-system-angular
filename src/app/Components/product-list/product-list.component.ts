import { Component } from '@angular/core';
import axios from 'axios';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products!: Array<Product>;
  filteredProducts!: Array<Product>;
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
        this.filteredProducts = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  }

  searchProducts(search: string) {
    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().match(search.toLowerCase())
    );
  }

  filterProducts(category: string) {
    if (category === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }
  }
}
