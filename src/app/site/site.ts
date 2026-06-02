// נתיב: src/app/site/site.ts (מעודכן)

import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge'; 

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, 
            MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule], 
  templateUrl: './site.html',
  styleUrls: ['./site.css'], 
})
export class Site implements OnInit {
    totalItems$!: Observable<number>;

    constructor(private cartService: CartService) {
      this.totalItems$ = this.cartService.totalItems$;
    }

    ngOnInit(): void {
    }
}