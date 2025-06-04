import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductList } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

// Productos simulados
const mockProducts = [
  {
    id: '1',
    name: 'Gold Card',
    description: 'Tarjeta dorada',
    logo: 'card.jpg',
    date_release: '2025-01-01',
    date_revision: '2025-01-01',
  },
  {
    id: '2',
    name: 'Black Card',
    description: 'Tarjeta negra',
    logo: 'card.jpg',
    date_release: '2025-02-01',
    date_revision: '2025-02-01',
  }
];

// Servicio simulado
const productServiceStub = {
  getAllProducts: () => of(mockProducts)
};

describe('ProductList (simplificado)', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductList, FormsModule],
      providers: [
        { provide: ProductService, useValue: productServiceStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ejecuta ngOnInit()
  });

  it('debe cargar todos los productos al iniciar', () => {
    expect(component.products.length).toBe(2);
  });

  it('debe filtrar por nombre correctamente', () => {
    component.searchText = 'black';
    const result = component.visibleProducts;
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Black Card');
  });
});
