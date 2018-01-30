import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'iPhone 8',
      description: 'Product from Apple',
      price: 60000,
      isAvailable: false
    },
    {
      id: 2,
      name: 'Samsung Galaxy S8',
      description: 'Product from Samsung',
      price: 50000,
      isAvailable: true
    },
    {
      id: 3,
      name: 'Moto G',
      description: 'Product from Motorola',
      price: 30000,
      isAvailable: true
    }
  ];

  constructor(private loggerService: LoggerService) {}

  getProducts(): Product[] {
    this.loggerService.log('ProductsService.getProducts() called.');
    return this.products;
  }

  addProduct(newProduct: Product) {
    this.loggerService.log('ProductsService.addProduct() called.');
    this.products.unshift(newProduct);
  }
}
