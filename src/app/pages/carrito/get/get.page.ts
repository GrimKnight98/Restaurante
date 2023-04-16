import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AlertController, AnimationController, LoadingController, ToastController } from '@ionic/angular';
import { log } from 'console';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.page.html',
  styleUrls: ['./get.page.scss'],
})
export class GetPage implements AfterViewInit {

  @ViewChildren('templateList', { read: ElementRef })
  templateListRef: any;

  items: any = [];
  tamount: number = 0;

  constructor(private carrito: CarritoService,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    private animationCtrl :AnimationController) { }


  ngAfterViewInit() {
    console.log("ebtra after");
    
    this.getItems();
    console.log("se cargaron los items");
    
    setTimeout(
      () => this.initListAnimation(),500
    );
    
  }

  initListAnimation() {
    const itemRefArray = this.templateListRef.toArray();
    for (let i = 0; i < itemRefArray.length; i++) {
      const element = itemRefArray[i].nativeElement;

      this.animationCtrl
        .create()
        .addElement(element)
        .duration(1000)
        .delay(i * (1000 / 3))
        .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
        .fromTo('transform', 'translateY(50px)', 'translateY(0px)')
        .fromTo('opacity', '0', '1')
        .play();
    }
  }

  ngOnInit() {
  }

  // ionViewWillEnter() {
  //   console.log("entra ionViewwillEnter");
    
  //   this.getItems();
  //   setTimeout(
  //     () => this.initListAnimation(),500
  //   );

  // }

  getItems() {
    this.carrito.getCarrito().subscribe(
      (res: any) => {
        this.items = res;
        for (let index = 0; index < this.items.length; index++) {
          //console.log(this.items[index].total);
          this.tamount += this.items[index].total;
          console.log(this.tamount);

        }

      }
    )

  }

  async limpiarCarrito() {
    const alert = await this.alertController.create({
      header: "Vaciar",
      subHeader: "Vaciar Carrito",
      message: "¿Deseas continuar?",
      buttons: [{
        text: 'Okay',
        handler: () => {
          console.log('entra a alert');
          this.showLoading();
        }
      }, 'Cancel']


    });
    await alert.present();
  }

  async borrarItemCarrito(item_id: any) {

    const alert = await this.alertController.create({
      header:"Modificar Pedido",
      subHeader:"¿deseas Continuar?",
      buttons:[{
        text:'Ok',
        handler: async ()=>{
          const loading = await this.loadingCtrl.create({
            message:"Espera..."
          });
          this.carrito.deleteCartItem(item_id)
              .subscribe(
                (res: any) => {
                  this.tamount = 0;
                  this.getItems();
                  setTimeout(
                    () => this.initListAnimation(),500
                  );
                  this.cartUpdate("bottom");
                  loading.dismiss();
                }
              );
              loading.present();
        }
      },'Cancel']
    });

    await alert.present();


  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Listo, Carrito vaciado',
      duration: 1500,
      position: position,
      color: "tertiary"
    });

    await toast.present();
  }

  async cartUpdate(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Listo, Pedido Actualizado',
      duration: 1500,
      position: position,
      color: "tertiary"
    });

    await toast.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Espera...',
    });

    console.log('entra limpiar carrito');

    this.carrito.cleanCart().subscribe(
      (res: any) => {
        this.tamount = 0;
        this.getItems();
        setTimeout(
          () => this.initListAnimation(),500
        );
        this.presentToast('bottom');
        loading.dismiss();
      },
      (err) => {
        console.log(err);
      });

    loading.present();
  }

}
