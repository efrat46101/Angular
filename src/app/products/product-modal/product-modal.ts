import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models';
import { CommonModule } from '@angular/common'; 
import { CategoryPathPipe } from '../pipes/CategoryPathPipe'; 
import { CartService } from '..//../cart/cart.service';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  templateUrl: './product-modal.html',
  styleUrls: ['./product-modal.css'],
  imports: [CommonModule, CategoryPathPipe,MatButtonModule,MatIconModule]
})
export class ProductModal {

   @Input({ required: true }) product!: Product;

    
    @Output() close = new EventEmitter<void>();

    @Output() addToCart = new EventEmitter<Product>();
  constructor() {}

    onAddToCart(): void {
     
      this.addToCart.emit(this.product);
    this.onClose(); 
    }

    
    onClose(): void {
        this.close.emit();
    }

}