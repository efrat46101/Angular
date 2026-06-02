import { Component } from '@angular/core';
import { Product } from './models';
import { CategoryPathPipe } from './pipes/CategoryPathPipe';
import { CommonModule } from '@angular/common';
import { ProductModal } from './product-modal/product-modal';
import { CartService } from '../cart/cart.service';
import { UserActionsTrackerService } from '../user-actions-tracker/user-actions-tracker.service';
import { MatIconModule } from '@angular/material/icon';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  imports: [CommonModule, CategoryPathPipe, ProductModal, MatIconModule]
})
export class Products {

  products: Product[] = [];

  showModal: boolean = false;
  selectedProduct: Product | null = null;

  constructor(
    private cartService: CartService,
    private trackerService: UserActionsTrackerService,
    private productsService: ProductsService
  ) {
    this.products = this.productsService.getProducts();
  }

  openModal(product: Product): void {
    this.selectedProduct = product;
    this.showModal = true;

    this.trackerService.addAction(
      'צפייה במוצר  ',
      `${product.name} (ID: ${product.id})`
    );
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProduct = null;
  }

  addItemToCart(product: Product): void {
    this.cartService.addItem(product);
    this.closeModal();

    this.trackerService.addAction(
      'הוספה לעגלה ',
      `${product.name} (ID: ${product.id})`
    );
  }
}
