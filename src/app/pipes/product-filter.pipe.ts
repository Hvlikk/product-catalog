import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';


@Pipe({
  name: 'productFilter',
  pure: false, //Always when detected change
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    const filter = searchTerm.toLowerCase();
    return products.filter(products => products.name.toLowerCase().match(filter)); //case sensitive
  }

}
