import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItemsOfCart();
  constructor(
    private cartService: CartService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    //this.items = this.cartService.getItemsOfCart();
  }
}
