
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Datoscliente } from '../interfaces/datos-cliente';

@Injectable({
  providedIn: 'root'
})
export class DatosClienteService {
  private api='http://localhost:3000/api';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
      private httpclient: HttpClient
  ) { }

  getAllDatoscliente(){
    const path=`${this.api}/datos_clientes`;
    return this.httpclient.get<Datoscliente[]>(path);
  }

  createDatoscliente(datos_clientes: Datoscliente){
    console.log(datos_clientes);    
    const path=`${this.api}/datos_clientes`;
    return this.httpclient.post(path,datos_clientes,{headers:this.headers});
    
  }
  updateDatoscliente(datos_clientes: Datoscliente){
    const path=`${this.api}/datos_clientes/${datos_clientes._id}`;
    return this.httpclient.put<Datoscliente>(path,datos_clientes,{headers:this.headers});
  }

  deleteDatoscliente(id: number){
    const path=`${this.api}/datos_clientes/${id}`;
    return this.httpclient.delete(path,{headers:this.headers});
  }

}

  
