import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
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

  onEdit() {
    this.loggingService.logMessage('Product Detail - Edit button clicked.');
    this.router.navigate(['/products', this.id, 'edit']);
  }

  onDelete() {
    this.loggingService.logMessage('Product Detail - Delete button clicked.');
  }
}
