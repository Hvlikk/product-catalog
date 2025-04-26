import { Component, signal } from '@angular/core';
import { ProductItemComponentComponent } from '../product-item-component/product-item-component.component';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [CommonModule, ProductItemComponentComponent, FormsModule],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.scss'
})
export class ProductListComponentComponent {
 
  newItemName = signal('XD');
  newItemPrice = signal(0);
  user = signal('Mateusz');

  products: Product[] = [
    {id: 1, name: "TV", price: 999},
    {id: 2, name: "Phone", price: 888},
    {id: 3, name: "Speaker", price: 777},
    {id: 4, name: "Earbuds", price: 666},
  ]

  addProduct() {
    console.log();
    this.products.push({id: this.products.length + 1, name: this.newItemName(), price: +this.newItemPrice()});
    console.log(this.products);
  }

  onDeleteProduct(id: number) {
    let tempProducts: Product[] = [];
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id !== id) {
        tempProducts.push(this.products[i]);
      }
    }
    this.products = tempProducts;
  }
}

