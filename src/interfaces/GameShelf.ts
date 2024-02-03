export interface Category {
  id: string;
  name: string;
  numberOfItems: number;
}

export interface Shelf {
  id: string;
  name: string;
  categories: Category[];
  numberOfItems: number;
}
