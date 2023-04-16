import { LoadingService } from './../../../services/loading-serv/loading.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CustomerService } from 'src/app/services/custmers/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombre = '';
  apellido = '';
  fecha_nacimiento = '';
  genero = '';
  correo = '';
  contrasena = '';


  constructor(private cliente: CustomerService,
              private router : Router,
              private loadingCtrl: LoadingController,
              private load : LoadingService) { }

  ngOnInit() {
  }

  registrarCliente(){
    
    var date = '2023-04-11T18:00:00-06:00';
    var body ={
      "nombre":this.nombre,
      "apellido":this.apellido,
      
      "fecha_nacimiento":this.fecha_nacimiento.substring(0,10),
      "genero":this.genero,
      "correo":this.correo,
      "contrasena":this.contrasena
    };
    var options = {
      headers: {
          'Content-Type': 'application/json'
     }
   };

  //  console.log(body);
  //  console.log(date.length);
   
   

   this.cliente.storeCustomer(body,options);
   this.router.navigate(['/home']);
   
    
  }



   async showLoading() {
     const loading = await this.loadingCtrl.create({
      message: 'Por favor espera...',
    });

    loading.present();
    this.registrarCliente();
    loading.dismiss();
   }

}
