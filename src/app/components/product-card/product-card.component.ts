import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProductos } from '../../interface/iproductos';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() miProducto!: IProductos;
  @Output() eliminar = new EventEmitter<string>();

  eliminarProducto(_id: string): void {
    // Emitimos el id del producto a eliminar
    this.eliminar.emit(_id);
  }
}
