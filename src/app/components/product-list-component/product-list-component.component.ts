import { Component, inject, signal } from '@angular/core';
import { ProductItemComponentComponent } from '../product-item-component/product-item-component.component';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [CommonModule, ProductItemComponentComponent, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.scss'
})
export class ProductListComponentComponent {
    prodService = inject(ProductService);
    newItemName = signal('Test');
    newItemPrice = signal(1500);
    user = signal('Mateusz');
    product: Product | undefined;

    newProduct = {
      name: '',
      price: 0,
      photo: 'assets/placeholder.png',
    }

    productForm: FormGroup;
    products: Product[] = this.prodService.getProducts();


    constructor(private fb: FormBuilder) {
      this.productForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        price: ['', [Validators.required, Validators.pattern('[0-9]*$')]]
      })
    }


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

  submitTempDrivenForm() {
    this.prodService.addProduct(this.newProduct.name, this.newProduct.price);

  }

  submitReactiveForm() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      console.log(productData);
      this.prodService.addProduct(productData.name, productData.price);
    } else {
      console.error("Form is invalid!")
    }
  }
}

