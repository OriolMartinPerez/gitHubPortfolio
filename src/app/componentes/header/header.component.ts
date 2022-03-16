import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  buscarcat(text : string){
    if (text.length > 2 ) {
      this.router.navigate(['buscar', text]);
    } else {
      alert('La cantidad minima de caracteres para realizar la busqueda es de tres caracteres');
    }

}
  cleanBusqueda(){
    this.router.navigate(['home']);
  }
}
