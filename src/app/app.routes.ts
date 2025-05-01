import { Routes } from '@angular/router';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApiProductsComponent } from './api-products/api-products.component';

export const routes: Routes = [
    { 
        path: 'home', 
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) 
    }, {
        path: 'products', 
        loadComponent: () => import('./components/product-list-component/product-list-component.component').then(m => m.ProductListComponentComponent)
    }, {
        path: 'api-prods', 
        loadComponent: () => import('./api-products/api-products.component').then(m => m.ApiProductsComponent)
    }, {
        path: 'product/:id', 
        loadComponent: () => import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
    }, {
        path: '', 
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'not-found',
        loadComponent: () => import('./not-found/not-found.component').then(m=>m.NotFoundComponent),
    }, {
        path: '**', 
        redirectTo: '/not-found'
    },
];
