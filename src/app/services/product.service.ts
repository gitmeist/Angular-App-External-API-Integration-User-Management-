import { Injectable } from '@angular/core';
import { IProductos } from '../interface/iproductos';
import { PRODUCTOS } from './../db/productos.db';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private arrProductos: IProductos[];

  constructor() {
    this.arrProductos = PRODUCTOS; // Usamos los productos iniciales
  }

  getAllProducts(): IProductos[] {
    return this.arrProductos;
  }

   // Método para obtener productos filtrados por ID
   getProductsById(id: string): IProductos[] {
    return this.arrProductos.filter(product => product._id === id);
  }

  deleteOneProduct(_id: string): void {
    this.arrProductos = this.arrProductos.filter(product => product._id !== _id);
    // Aquí deberías guardar los cambios en el archivo productos.db.ts (esto es solo un ejemplo)
    this.guardarProductos();
  }

  findOneProduct(_id: string): IProductos | undefined {
    return this.arrProductos.find(product => product._id === _id);
  }

  // Método para guardar los productos en el archivo (simulando persistencia en la "base de datos")
  private guardarProductos(): void {
    // Aquí deberías implementar la lógica para guardar los productos de vuelta en productos.db.ts
    // Por ejemplo, podrías usar el método `fs` de Node.js si tu backend está en Node.
  }
}
