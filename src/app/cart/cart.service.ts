

import { Injectable } from '@angular/core';
import { Product } from '../products/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface CartItem extends Product {
    quantity: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

    public cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

    public totalItems$: Observable<number> = this.cartItems$.pipe(

        map(items => items.reduce((acc, item) => acc + item.quantity, 0))
    );


    public totalPrice$: Observable<number> = this.cartItems$.pipe(
        map(items => items.reduce((acc, item) => acc + (item.price * item.quantity), 0))
    );

    addItem(product: Product): void {
        const currentItems = this.cartItemsSubject.getValue();
        const existingItem = currentItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {

            const newItem: CartItem = { ...product, quantity: 1 };
            currentItems.push(newItem);
        }
        this.cartItemsSubject.next(currentItems);
    }


    removeItem(product: Product): void {
        const currentItems = this.cartItemsSubject.getValue();
        const existingItem = currentItems.find(item => item.id === product.id);

        if (existingItem) {
            if (existingItem.quantity > 1) {
                existingItem.quantity--;
            } else {

                const index = currentItems.indexOf(existingItem);
                currentItems.splice(index, 1);
            }
            this.cartItemsSubject.next(currentItems);
        }
    }


    deleteItem(productId: number): void {
        let currentItems = this.cartItemsSubject.getValue();
        currentItems = currentItems.filter(item => item.id !== productId);
        this.cartItemsSubject.next(currentItems);
    }
}