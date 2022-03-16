import { Component, OnInit } from '@angular/core';
import { InfoPag } from 'src/app/interfaces/infoPag';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

fecha = new Date().getFullYear();

infoPag: InfoPag = {};

  constructor(public infoService: InfoService) {

   }

  ngOnInit(): void {
    
    this.infoService.getinfoPag()
    .subscribe((resp: InfoPag) =>{
      console.log(resp);
      this.infoPag = resp;

    });

  }

}
