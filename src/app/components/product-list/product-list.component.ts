import { Component, OnInit } from '@angular/core';
import { IProductos } from '../../interface/iproductos';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  arrProductos: IProductos[];

  constructor(private productService: ProductService) {
    this.arrProductos = [];
  }

  ngOnInit(): void {
    // Obtener productos al inicio
    this.arrProductos = this.productService.getAllProducts();
  }

  // Método para manejar la eliminación de productos
  eliminarProducto(id: string): void {
    this.arrProductos = this.arrProductos.filter(producto => producto._id !== id);
    console.log(this.arrProductos.values);
  }
}
