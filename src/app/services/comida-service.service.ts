import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { comida } from '../platillos/platillo/get-platillos/get-platillos.page';
import { Comidas } from '../interfaces/comida';

// export interface comida{
//   id:number,
//   imagen:string,
//   nombre:string,
//   descripcion:string,
//   ingredientes:string,
//   tipo:number,
//   precio:number,
//   status:number,
//   fecha:string
// }
@Injectable({
  providedIn: 'root'
})
export class ComidaServiceService {


  constructor(private http:HttpClient) { }


  getComidas():Observable<Comidas>{
    return this.http.get<Comidas>('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/items');
  }

  // getComidas(){
  //   return this.http.get('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/items')
  //   .pipe(
  //     map((res:any)=>{
  //       return res.items;
  //     })
  //   )
  // }

  

  getComidaDetails(id:any){
    return this.http.get(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/getitem?id=${id}`)
    .pipe(
      map(
        (res: any)=>{
          return res.items;
        }
      )
    )
  }

  getComidaxTipo(tipo:any){
    return this.http.get(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/comidaXtipo?tipo=${tipo}`)
    .pipe(
      map(
        (res:any)=>{
          return res.items;
        }
      )
    )
  }

  getComidaxNombre(entrada:any){
    return this.http.get(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/comidaXnombre?entrada=${entrada}`)
    .pipe(
      map(
        (res:any)=>{
          return res.items;
        }
      )
    )
  }
}

