import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductItemComponentComponent } from '../product-item-component/product-item-component.component';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [CommonModule, ProductItemComponentComponent, FormsModule, RouterLink, ReactiveFormsModule, ProductFilterPipe],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.scss'
})
export class ProductListComponentComponent implements OnInit {
    prodService = inject(ProductService);
    newItemName = signal('Test');
    newItemPrice = signal(1500);
    user = signal('Mateusz');
    product: Product | undefined;
    searchTerm = '';
    hasMoreItems : boolean = true;
    loading : boolean = false;

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



    ngOnInit() {
      this.loadProducts();
    }

    loadProducts() {
      this.loading = true;
      this.products = this.prodService.getProducts(1, 10);
      this.loading = false;
    }

    loadMoreProducts() {
      console.log("Loadmore:", this.loading, this.hasMoreItems)
      if (!this.loading && this.hasMoreItems) {
        this.loading = true;
        const newProducts = this.prodService.loadNextPage();
        if (newProducts.length > 0) {
          this.products.push(...newProducts); // Dodaj nowe produkty do listy
        } else {
          this.hasMoreItems = false; // Brak kolejnych produktów do załadowania
        }
        this.loading = false;
      }
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
    this.prodService.resetPagination();
    this.hasMoreItems = true;
    this.loadProducts(); // przeładowanie od nowa po dodaniu produktu
  }

  submitReactiveForm() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.prodService.addProduct(productData.name, productData.price);
      this.prodService.resetPagination();
      this.hasMoreItems = true;
      this.loadProducts(); // przeładowanie od nowa po dodaniu produktu
    } else {
      console.error("Form is invalid!")
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    console.log('scrolling...');  // Debugowanie, aby sprawdzić, czy scroll jest wywoływany
    const bottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
    console.log(`bottom reached: ${bottom} loading: ${this.loading}, hasmore: ${this.hasMoreItems}`);  // Debugowanie, aby sprawdzić, czy warunek jest spełniony
  
    if (bottom && !this.loading && this.hasMoreItems) {
      console.log("Load more!")
      this.loadMoreProducts();
    }
  }
}

