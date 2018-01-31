import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  id: number;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.product = this.productsService.getProduct(this.id);

      if (!this.product) {
        this.product = new Product();
      }
    });
  }

  onSave() {
    this.loggingService.logMessage('Product Form - Save button clicked.');

    if (this.id) {
      console.log('Updating product.');
      this.productsService.updateProduct(this.id, this.product);
    } else {
      console.log('Adding new product.');
      this.productsService.addProduct(this.product);
    }

    this.router.navigate(['/products']);
  }
}
