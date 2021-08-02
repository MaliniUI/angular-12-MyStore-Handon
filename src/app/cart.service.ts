import { Injectable } from '@angular/core';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }

  getItemsOfCart() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
