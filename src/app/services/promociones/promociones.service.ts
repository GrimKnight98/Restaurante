import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Promociones } from 'src/app/interfaces/promociones';
import { DetallePromocion } from 'src/app/interfaces/detallePromocion';
 
@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  constructor(private http:HttpClient) { }


  getPromociones():Observable<Promociones>{
    return this.http.get<Promociones>('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/promociones')
  }
  // getPromociones(){
  //   return this.http.get('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/promociones')
  //   .pipe(
  //     map(
  //       (res:any)=>{
  //         return res.items;
  //       }
  //     )
  //   )
  // }

  getDetallePromocion(prommocion:any):Observable<DetallePromocion>{
    return this.http.get<DetallePromocion>(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/promocionByID?promocion=${prommocion}`);
  }


}
