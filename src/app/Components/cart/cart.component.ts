import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ProductGroup,
  selectGroupedCartEntries,
} from 'src/app/store/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartEntries$: Observable<ProductGroup[]>;
  constructor(private store: Store) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
    console.log(this.cartEntries$);
  }
}
