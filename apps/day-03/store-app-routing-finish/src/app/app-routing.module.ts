import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Product components
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

// Customer components
import { CustomersComponent } from './customers/customers.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'add',
        component: ProductFormComponent,
        pathMatch: 'full'
      },
      { path: ':id/edit', component: ProductFormComponent },
      { path: ':id', component: ProductDetailComponent }
    ]
  },
  { path: 'customers', component: CustomersComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
