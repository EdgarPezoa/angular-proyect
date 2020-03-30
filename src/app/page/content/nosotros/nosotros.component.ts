import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/utils/interfaces/Productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  productos: Array<Productos>;

  constructor(private productosService: ProductosService) {
   }

  ngOnInit(): void {
    this.productosService.leerProducto.subscribe((productosApi)=>{
      this.productos = productosApi;
    });
    
  }

}
