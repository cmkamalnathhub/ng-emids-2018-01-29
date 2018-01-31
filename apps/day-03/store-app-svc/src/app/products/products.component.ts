import { Component } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {
    this.products = this.productsService.getProducts();
  }

  onProductCreated(newProduct: Product) {
    this.products.unshift(newProduct);
    this.loggerService.log('New product added to the list.');
  }
}
