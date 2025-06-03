import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductList
  },
  {
    path: 'agregar',
    loadComponent: () => import('./components/add-product/add-product.component').then(m => m.AddProductComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
