import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

id: any;
producto: any;


  constructor(private route: ActivatedRoute, 
    private productsService: ProductsService) {}


  ngOnInit(): void {

      this.id = this.route.snapshot.paramMap.get('id'); 

      this.productsService.getProducto(this.id)
      .subscribe((resp:any)=>{
        this.producto = resp;
      });
  }
}
