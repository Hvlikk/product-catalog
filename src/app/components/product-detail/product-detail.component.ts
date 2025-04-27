import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  productId?: number; 
  productService = inject(ProductService);

  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Przechwycenie id z URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = +id;
      console.log("Prod id:", this.productId);
    } else {
      console.error("Prod not found");
      this.productId = undefined; 
    }
    this.product = this.productService.getProductById(this.productId!);
    console.log('Product ID:', this.productId);
    console.log("prod photo", this.product?.photo);
  }

 
}