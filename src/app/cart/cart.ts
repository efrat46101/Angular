
import { Product } from '../products/models'; 
import { Component } from '@angular/core';
import { CommonModule,CurrencyPipe } from '@angular/common';
import { CartService, CartItem } from './cart.service';
import { Observable } from 'rxjs';

import { UserActionsTrackerService } from '../user-actions-tracker/user-actions-tracker.service';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  imports: [CommonModule, CurrencyPipe, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule]
})

export class Cart {

  cartItems$: Observable<CartItem[]>;
  totalPrice$: Observable<number>;


  constructor(
    private cartService: CartService,
    private trackerService: UserActionsTrackerService 
  ) {
    this.cartItems$ = this.cartService.cartItems$;
    this.totalPrice$ = this.cartService.totalPrice$;
  }


  incrementQuantity(item: CartItem): void {
    this.cartService.addItem(item);
 
    this.trackerService.addAction(
        'שינוי כמות: הגדלה בסל',
        `מוצר: ${item.name}`
    );
  }

  decrementQuantity(item: CartItem): void {
    this.cartService.removeItem(item);
    

    this.trackerService.addAction(
        'שינוי כמות: הקטנה בסל',
        `מוצר: ${item.name}`
    );
  }

  deleteItemFromCart(itemId: number): void {

    this.cartService.deleteItem(itemId);
    

    this.trackerService.addAction(
        'מחיקה מסל',
        `מחיקת פריט ID: ${itemId}`
    );
  }
}