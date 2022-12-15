export class Product {
  id!: number;
  title!: string;
  price!: number;
  category!: string;
  description!: string;
  image!: string;
  rating!: Rating;
}

class Rating {
  rate!: number;
  count!: number;
}
