import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL='http://localhost:3000/products';//Si quisiera llamar otro servidor solo se´ria cambiar esta URL
  constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {//Observable es un flujo de datos en el tiempo
                                          //Es muy normal usarlos en Angular
      return this.http.get<Product[]>(this.apiURL);//Esperamos una array  de tipo Product que fue la interfaz que usamos
    }
}
