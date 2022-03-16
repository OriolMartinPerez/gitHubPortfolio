import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 
    this.getProductos_idx();
}

public getProductos_idx(){
  return this.http.get('https://porfolioapp-b31f3-default-rtdb.firebaseio.com/productos_idx.json');
}
public getProductos(){
  return this.http.get('https://porfolioapp-b31f3-default-rtdb.firebaseio.com/productos.json');

}

public getProducto(id: string){
  return this.http.get(`https://porfolioapp-b31f3-default-rtdb.firebaseio.com/productos/${ id }.json`);

}

}