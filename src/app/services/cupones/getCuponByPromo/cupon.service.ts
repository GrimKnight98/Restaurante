import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuponByPromo } from 'src/app/interfaces/cuponByPromo';

@Injectable({
  providedIn: 'root'
})
export class CuponService {

  constructor(private http:HttpClient) { }

  getCuponByPromo(promocion_id:any):Observable<CuponByPromo>{
    return this.http.get<CuponByPromo>(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/cuponByPromo?promocion_id=${promocion_id}`)
  }

}
