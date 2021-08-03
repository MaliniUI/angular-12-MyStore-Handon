import { Injectable } from '@angular/core';
import { Product, products } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor(private httpClient: HttpClient) {}

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

  getShippingPrices() {
    return this.httpClient.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
