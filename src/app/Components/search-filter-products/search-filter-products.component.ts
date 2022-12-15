import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter-products',
  templateUrl: './search-filter-products.component.html',
  styleUrls: ['./search-filter-products.component.scss'],
})
export class SearchFilterProductsComponent {
  @Output() searchProduct: EventEmitter<string> = new EventEmitter();
  @Output() filterProduct: EventEmitter<string> = new EventEmitter();
  search!: string;
  filter!: string;
  isSearch!: boolean;
  categories!: Array<string>;

  constructor() {
    this.isSearch = false;
    this.categories = [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ];
  }

  searchProducts() {
    console.log(this.search);
    if (this.isSearch === true) {
      this.isSearch = false;
      this.search = '';
    } else {
      this.isSearch = true;
    }
    this.searchProduct.emit(this.search);
  }

  filterProducts() {
    this.filterProduct.emit(this.filter);
  }
}
