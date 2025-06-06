import { Component, inject, OnInit } from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';
import { DatePipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-list',
  imports: [DatePipe, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductList implements OnInit {
  productService = inject(ProductService);
  products: ProductInterface[] = [];
  searchText = '';
  itemsPageNumber = 5;
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error("Error al obtener productos:", error);
      }
    })
  }

  get visibleProducts(): ProductInterface[] {
    const text = this.searchText.toLowerCase().trim();

    const filtered = this.products.filter(product =>
      (product.name?.toLowerCase().includes(text) ?? false) ||
      (product.description?.toLowerCase().includes(text) ?? false)
    );

    return filtered.slice(0, this.itemsPageNumber);
  }


}
