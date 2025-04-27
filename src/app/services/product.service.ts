import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [
      {id: 1, name: "TV", price: 999, photo:'assets/placeholder.png'},
      {id: 2, name: "Phone", price: 888, photo:'assets/placeholder.png'},
      {id: 3, name: "Speaker", price: 777, photo:'assets/placeholder.png'},
      {id: 4, name: "Earbuds", price: 666, photo:'assets/placeholder.png'},
  ]

  getProducts() : Product[] {
    return this.products;
  }

  getProductById(id: number) : Product | undefined {
    let product: Product | undefined;
    product = this.products.find(product => product.id === id);
    
    if (product) {
      return product
    } else {
      return undefined;
    }
  }

  addProduct(newItemName: string, newItemPrice: number) {
    console.log();
    this.products.push({id: this.products.length + 1, name: newItemName, price: newItemPrice, photo: 'assets/placeholder.png'});
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
