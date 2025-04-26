import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item-component.component.html',
  styleUrl: './product-item-component.component.scss'
})
export class ProductItemComponentComponent {
  isPremium = false;
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
}
