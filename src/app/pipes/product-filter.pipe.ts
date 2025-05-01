import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';


@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    return products.filter(products => products.name.match(searchTerm)); //case sensitive
  }

}
