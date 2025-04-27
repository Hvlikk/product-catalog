import { Component, inject, signal } from '@angular/core';
import { ProductItemComponentComponent } from '../product-item-component/product-item-component.component';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [CommonModule, ProductItemComponentComponent, FormsModule, RouterLink],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.scss'
})
export class ProductListComponentComponent {
 
  
    prodService = inject(ProductService);
    newItemName = signal('Test');
    newItemPrice = signal(1500);
    user = signal('Mateusz');
    product: Product | undefined;

    products: Product[] = this.prodService.getProducts();

  addProduct() {
    this.prodService.addProduct(this.newItemName(), +this.newItemPrice());
  }
    
  onDeleteProduct(id: number) {
    this.prodService.onDeleteProduct(id);
    this.products = this.prodService.getProducts(); // Zaktualizowanie listy
  }

  getProductById(id: number) : void {
    this.prodService.getProductById(id);
  }
}

