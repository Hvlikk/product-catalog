import { Routes } from '@angular/router';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'products', component: ProductListComponentComponent},
    {path: 'product/:id', component: ProductDetailComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home'}
];
