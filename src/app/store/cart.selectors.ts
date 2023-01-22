import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../Models/Product';

export interface ProductGroup {
  product: Product;
  count: number;
}

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    return state.length;
  }
);

export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    let price = 0;
    state.forEach((p) => (price += p.price));
    return price;
  }
);

export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    let map: Map<number, ProductGroup> = new Map();

    state.forEach((p) => {
      if (map.get(p.id)) {
        (map.get(p.id) as ProductGroup).count++;
      } else {
        map.set(p.id, { product: p, count: 1 });
      }
    });

    const sortedMap = new Map([...map.entries()].sort());
    return Array.from(sortedMap.values());
  }
);
