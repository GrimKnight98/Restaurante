import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  correo = localStorage.getItem('session_mail');
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Promociones', url: 'promociones', icon: 'pricetag' },
    { title: 'Platillos', url: 'get-platillos', icon: 'fast-food' },
    { title: 'Snacks', url: '/folder/Archived', icon: 'pizza' },
    { title: 'Carrito', url: '/get', icon: 'cart' }
    
    
  ];

  public appSettings =[
    { title: 'Ayuda', function: 'ayuda()', icon: 'information-circle' },
    { title: 'Cerrar Sesion', function: 'logout()', icon: 'log-out' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private toastController : ToastController,
    private router : Router
  ) {}

  logout(){
    console.log(this.appSettings);
    
    localStorage.setItem('session_id', '0');
    localStorage.setItem('session_mail','Iniciar sesion');
    localStorage.setItem('session_passwd', '');
    window.location.reload();
    this.presentToast('bottom');



  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Tu sesion concluyo... Bye :)',
      duration: 1500,
      position: position,
      color: 'tertiary'
    });

    await toast.present();
  }
}
