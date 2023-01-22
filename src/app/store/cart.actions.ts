import { createAction, props } from '@ngrx/store';
import { Product } from '../Models/Product';

export const addProduct = createAction(
  '[add product] Add product',
  props<Product>()
);
export const removeProduct = createAction(
  '[remove product] Remove product',
  props<Product>()
);
export const clearCart = createAction('[clear cart] Clear Cart');
