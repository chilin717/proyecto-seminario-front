


import { Component, OnInit } from '@angular/core';
import { Datoscliente } from 'src/app/interfaces/datos-cliente';
import { DatosClienteService } from 'src/app/services/datos-cliente.service';
  
@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.page.html',
  styleUrls: ['./table-client.page.scss'],
})
export class TableClientPage implements OnInit {
  cliente:Datoscliente[]=[];
  constructor(

  private clientSrv: DatosClienteService ,
  
  ) { }

  ngOnInit(): void {
    this.getAllDatoscliente();
  }
  getAllDatoscliente() {
    this.clientSrv.getAllDatoscliente()
    .subscribe(todos =>{
      this.cliente=todos
      console.log(todos);
      
    });
  }

}
