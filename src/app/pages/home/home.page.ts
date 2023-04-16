import { Router } from '@angular/router';
import { PromocionesService } from './../../services/promociones/promociones.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';
import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  promos :any =[];
  presentingElement: any;
  credentials:any;
  email : string = '';
  passwd: string = '';

  constructor(private http:HttpClient, 
              private promociones:PromocionesService,
              private modal : ModalController,
              private router : Router,
              private loginServ : LoginService,
              private toastController: ToastController) { }

  ngOnInit() {
    this.getPromociones();
    this.presentingElement = document.querySelector('.ion-page');
  }

  // getPromociones(){
  //   this.promociones.getPromociones()
  //   .subscribe(
  //     (res:any)=>{
  //       this.promos = res;
  //     }
  //   )
  // }

  getPromociones(){
    this.promociones.getPromociones()
    .subscribe(
      resp=>{
        this.promos=resp.items;
      }
    )
  }

  login(){
    //console.log(this.email, this.passwd);
    //this.presentingElement = document.querySelector('.ion-page');
    var body = {
      "P_USER":this.email,
      "P_PASSWD":this.passwd
    };
    var options = {
      headers: {
          'Content-Type': 'application/json'
     }
   };
    this.loginServ.login(body,options).subscribe(
      (res:any)=>{
        this.credentials = res;
        console.log(this.credentials);

        if (this.credentials.USR){
            this.modal.dismiss();
            this.email='';
            this.passwd='';
            localStorage.setItem('session_mail', this.credentials.USR);
            localStorage.setItem('session_passwd',this.credentials.PASS);
            localStorage.setItem('session_id', this.credentials.USR_I);
            console.log(localStorage.getItem('session_mail'));
            window.location.reload();
            
        }else{
          this.presentToast('bottom');
        }
      }
    );
    
  }

  singup(){
    this.modal.dismiss();
    this.router.navigate(['register']);
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Datos no validos, intente de nuevo :(!',
      duration: 1500,
      position: position,
      color: 'danger'
    });

    await toast.present();
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };



}
