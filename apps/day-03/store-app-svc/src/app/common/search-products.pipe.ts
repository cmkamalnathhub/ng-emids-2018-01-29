import { PipeTransform, Pipe } from '@angular/core';

import { Product } from '../models/product';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {
  transform(products: Product[], searchText: string, fieldName: string) {
    const filteredProducts = products.filter(
      product =>
        product[fieldName].toLowerCase().indexOf(searchText.toLowerCase()) >= 0
    );
    return filteredProducts;
  }
}
