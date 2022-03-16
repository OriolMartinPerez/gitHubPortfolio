import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  textbusqueda : any ='';
  productos_idx: any = [];
  productosResultados: any = [];

  loading = true;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService) { }

  ngOnInit(): void {

    this.textbusqueda = this.route.snapshot.paramMap.get('textBusq'); 

    this.textbusqueda = this.textbusqueda.toLowerCase();

    this.productsService.getProductos_idx()
    .subscribe((resp:any)=>{
        this.productos_idx = resp;

                this.productos_idx.forEach((prod:any) => {

                  let categoria = prod.categoria.toLowerCase();

                  if (prod.categoria.indexOf(this.textbusqueda) >= 0) {
                      this.productosResultados.push(prod);
                  }
                });


                console.log(this.productos_idx);
                console.log(this.productosResultados);

      });
      setTimeout(() => {
        this.loading = false;
      },2000);


  }
  
}
