import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./components/product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-tcs';
}
