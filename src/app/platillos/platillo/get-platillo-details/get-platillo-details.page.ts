import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComidaServiceService } from 'src/app/services/comida-service.service';
import { log } from 'console';
import { get } from 'http';
import { ToastController } from '@ionic/angular';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-get-platillo-details',
  templateUrl: './get-platillo-details.page.html',
  styleUrls: ['./get-platillo-details.page.scss'],
})
export class GetPlatilloDetailsPage implements OnInit {

  platillos : any=[];
  cant :any ='';
  cantidad :number = 0;


  constructor(private http:HttpClient, 
              private comidaServ:ComidaServiceService, 
              private route: ActivatedRoute,
              private toastController:ToastController,
              private carrito: CarritoService) { }

  ngOnInit() { 

    const id = this.route.snapshot.paramMap.get('id');
    this.comidaServ.getComidaDetails(id).subscribe(
      (res)=>{
        this.platillos = res;
      }
    )
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Pedido añadido al carrito!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  addCart(id:any){
      this.presentToast('top');
      console.log(this.cant, id);
      var options = {
        headers: {
            'Content-Type': 'application/json'
       }
     };
      var body = {
        "item":id,
        "user_id":localStorage.getItem('session_id'),
        "cantidad":Number(this.cantidad)
      }
      console.log(body);
      console.log(options);
      
      
      this.carrito.addCart(body,options );
      
  }
  increment() {
    this.cantidad++;
  }

  decrement() {
    this.cantidad--;
  }


}
