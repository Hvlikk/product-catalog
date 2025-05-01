import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiProd } from '../models/apiProduct.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http : HttpClient) {}

    private products: Product[] = [
      {id: 1, name: "TV", price: 999, photo:'assets/placeholder.png'},
      {id: 2, name: "Phone", price: 888, photo:'assets/placeholder.png'},
      {id: 3, name: "Speaker", price: 777, photo:'assets/placeholder.png'},
      {id: 4, name: "Earbuds", price: 666, photo:'assets/placeholder.png'},
      {id: 5, name: "TV", price: 999, photo:'assets/placeholder.png'},
      {id: 6, name: "Phone", price: 888, photo:'assets/placeholder.png'},
      {id: 7, name: "Speaker", price: 777, photo:'assets/placeholder.png'},
      {id: 8, name: "Earbuds", price: 666, photo:'assets/placeholder.png'},
      {id: 9, name: "TV", price: 999, photo:'assets/placeholder.png'},
      {id: 10, name: "Phone", price: 888, photo:'assets/placeholder.png'},
      {id: 11, name: "Speaker", price: 777, photo:'assets/placeholder.png'},
      {id: 12, name: "Earbuds", price: 666, photo:'assets/placeholder.png'},
      {id: 13, name: "TV", price: 999, photo:'assets/placeholder.png'},
      {id: 14, name: "Phone", price: 888, photo:'assets/placeholder.png'},
      {id: 15, name: "Speaker", price: 777, photo:'assets/placeholder.png'},
      {id: 16, name: "Earbuds", price: 666, photo:'assets/placeholder.png'},
  ]

  private currentPage = 0;
  private pageSize = 10;
  private loadedSize : number = 0;


  loadNextPage(): Product[] {
    this.currentPage++;
    return this.getProducts(this.currentPage, this.pageSize);
  }
  
  getProducts(page: number = 1, pageSize: number = 10) : Product[] {
    this.currentPage = page;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return this.products.slice(start, end);
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

  resetPagination() {
    this.currentPage = 1;
  }

  addProduct(newItemName: string, newItemPrice: number) {
    const newProduct : Product = {id: this.products.length+1, name: newItemName, price: newItemPrice, photo: 'assets/placeholder.png'};
    this.products = [...this.products, newProduct];
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
    for(let id = 0; id < this.products.length; id++){
      this.products[id].id = id;
    }
  }


  getProductsFromApi() : Observable<Product[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(
      map(products =>  
        products.map(p => ({
        id: p.id,
        name: p.title,
        price: p.price
      } as Product))
    )
    );
  }
}
