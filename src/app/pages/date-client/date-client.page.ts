
import { DatosClienteService } from './../../services/datos-cliente.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-date-client',
  templateUrl: './date-client.page.html',
  styleUrls: ['./date-client.page.scss'],
})
export class DateClientPage implements OnInit {
 clientData:any={
  "cedula": "",
  "nombre" : "",
  "apellidos" : "",    
  "celular": ""
 }
  constructor(private clientSrv:DatosClienteService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.clientData);
    this.clientSrv.createDatoscliente(this.clientData)
      .subscribe(res=>{
        console.log(res);
        
      })
  }

}
