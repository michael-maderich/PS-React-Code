export interface GroceryItemType {
  id: number;
  product: string;
  category: string;
  found: boolean;
}

export class Grocery implements GroceryItemType {
  id: number;
  product: string;
  category: string;
  found: boolean;
  constructor(id: number, product: string, category: string, found: boolean) {
    this.id = id;
    this.product = product;
    this.category = category;
    this.found = found;
  }
}

export type GroceryListType = GroceryItemType[];

export type InputElement = HTMLInputElement | HTMLTextAreaElement;

export {};