import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductItemComponentComponent } from './components/product-item-component/product-item-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductItemComponentComponent, ProductListComponentComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'product-catalog';
}
