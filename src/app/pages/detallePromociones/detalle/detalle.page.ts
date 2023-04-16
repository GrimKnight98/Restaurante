import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clipboard } from '@capacitor/clipboard';
import { ToastController } from '@ionic/angular';
import { log } from 'console';
import { CuponService } from 'src/app/services/cupones/getCuponByPromo/cupon.service';
import { PromocionesService } from 'src/app/services/promociones/promociones.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  promocion:any=[];
  cupones:any=[];

  constructor(private route:ActivatedRoute,
              private promociones :PromocionesService,
              private cupon: CuponService,
              private toastController:ToastController) { }

  getCuponByPromo(promocion_id:any){
    this.cupon.getCuponByPromo(promocion_id)
    .subscribe(
      resp=>{
        this.cupones = resp.items;
        console.log(this.cupones);
        
      }
    )

  }            

  ngOnInit() {


    const promo = this.route.snapshot.paramMap.get('id');
    this.promociones.getDetallePromocion(promo)
    .subscribe(
      resp=>{
        this.promocion=resp.items;
        for (let index = 0; index < this.promocion.length; index++) {
          const element = this.promocion[index].id;
          this.getCuponByPromo(element); 
        }
      }
    )
  }

  copiarCupon(cupon:any){
    
    Clipboard.write({
      string:cupon
    }).then(()=>{
      console.log("copiado");
      
    })

    this.presentToast("top");
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      icon:"checkmark-circle-outline",
      message: 'Copiado al portapapeles!',
      duration: 1500,
      position: position,
      color:"success"
    });

    await toast.present();
  }

}
