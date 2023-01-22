import { createReducer, on } from '@ngrx/store';
import { Product } from '../Models/Product';
import { addProduct, clearCart, removeProduct } from './cart.actions';

export const initialCartEntries: Product[] = [];

export const cartReducer = createReducer(
  initialCartEntries,
  on(clearCart, () => []),
  on(addProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),
  on(removeProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find((e) => e.id == product.id);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    return entriesClone;
  })
);
