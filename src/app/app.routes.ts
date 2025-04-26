import { Routes } from '@angular/router';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'products', component: ProductListComponentComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home'}
];
