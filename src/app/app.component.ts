import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductListComponent } from "./components/product-list/product-list.component";



@Component({
  selector: 'app-root',
  imports: [ ProductListComponent, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MFP_Actividad_03';
}
