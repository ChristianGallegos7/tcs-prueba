import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  env = environment;

  private http = inject(HttpClient);

  getAllProducts(): Observable<ProductInterface[]> {
    return this.http.get<{ data: ProductInterface[] }>(`${this.env.URL_BACKEND}/products`).pipe(
      map(response => response.data)
    )
  }
}
