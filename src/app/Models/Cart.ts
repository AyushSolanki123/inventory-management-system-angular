import { Product } from './Product';

export class Cart {
  id!: number;
  userId!: number;
  date!: string;
  products!: [Product];
}
