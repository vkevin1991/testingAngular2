import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
          {
              path: 'products', component: ProductListComponent
          },
          {
              path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductGuardService]
          },
      ])
  ],
  declarations: [
      ProductListComponent,
      ConvertToSpacesPipe,
      StarComponent,
      ProductDetailComponent
    ],
    providers: [ProductGuardService, ProductService]
})
export class ProductModule { }
