import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  status: any;

  constructor(private http: HttpClient) { }

  getCarrito() {
    const user_id = localStorage.getItem('session_id');
    return this.http.get(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/carrito?user_id=${user_id}`)
      .pipe(
        map(
          (res: any) => {
            return res.items;
          }
        )
      )
  }

  addCart(body: any, options: any) {
    return this.http.post('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/carrito', body, options).subscribe(
      data => {
        console.log(data);

      }, error => {
        console.log(error);

      }
    )
  }

  cleanCart() {
    const user_id = localStorage.getItem('session_id');
    return this.http.delete(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/carrito?usuario=${user_id}`);
  }

  deleteCartItem(itemId: any) {
    return this.http.delete(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/delItemByID?id=${itemId}`);
  }
}
