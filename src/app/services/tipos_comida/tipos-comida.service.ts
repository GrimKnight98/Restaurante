import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposComidaService {

  constructor(private http:HttpClient) { }

  getTipoComidas(){
    return this.http.get('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/tipos-comida')
    .pipe(
      map(
        (res:any)=>{
          return res.items;
          
        }
      )
    )
  }
}
