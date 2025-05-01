import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { ApiProd } from '../models/apiProduct.model';
import { CommonModule } from '@angular/common';
import { ProductItemComponentComponent } from '../components/product-item-component/product-item-component.component';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-api-products',
  standalone: true,
  imports: [CommonModule, ProductItemComponentComponent],
  templateUrl: './api-products.component.html',
  styleUrl: './api-products.component.scss'
})
export class ApiProductsComponent {
  productsArr : Product[] = [];
  constructor (private productService: ProductService) {}


  getProducts() {
    this.productService.getProductsFromApi().subscribe(products => {
      this.productsArr = products;
      console.log('Produkty z API:', products);
      console.log(this.productsArr);
    })
  }

  ngOnInit() {
    this.getProducts();
  }
}
