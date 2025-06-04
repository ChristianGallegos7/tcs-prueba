import { Component } from '@angular/core';
import { ProductList } from "./components/product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
