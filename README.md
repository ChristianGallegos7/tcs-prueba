# Prueba TCS

## Agregar Producto

**Endpoint:**  
`POST http://localhost:3002/bp/products`

**Ejemplo de cuerpo (JSON):**

```json
{
  "id": "1",
  "name": "Gold Credit Card",
  "description": "Some description",
  "logo": "card.jpg",
  "date_release": "2025-01-01",
  "date_revision": "2025-01-01"
}
```

---

## Ejecutar Tests

```bash
npm run test
```

---

## Tests Esperados

- **Debe cargar todos los productos al iniciar:**  
  Al iniciar el componente, la lista de productos debe contener todos los productos simulados (2 productos).

- **Debe filtrar por nombre correctamente:**  
  Si se busca por el texto "black", solo debe aparecer el producto "Black Card".

- **No debe devolver resultados si no hay coincidencias:**  
  Si se busca un texto que no coincide con ningún producto (por ejemplo, "inexistente"), la lista de resultados debe estar vacía.
