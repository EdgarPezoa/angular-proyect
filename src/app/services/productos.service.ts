import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../utils/interfaces/Productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // httpApi:string;
  httpApi:string = "https://angular-front-api.firebaseio.com/productos.json";
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

  get leerProducto(): Observable<Productos[]>{
    return this.httpClient.get<Productos[]>(this.httpApi);
  }

}
