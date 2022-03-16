import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos_idx: any = [];
  loading = true;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProductos_idx()
      .subscribe((resp:any)=>{
          this.productos_idx = resp;

          setTimeout(() => {
            this.loading = false;
          },2000);
  });

  
}

}
