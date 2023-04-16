import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { PromocionesService } from 'src/app/services/promociones/promociones.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements AfterViewInit {

  @ViewChildren('templateList', { read: ElementRef })
  templateListRef: any;
  promociones: any =[];

  constructor(private promocionesServ: PromocionesService,
              private http : HttpClient,
              private animationCtrl: AnimationController,
              private router:Router
              ) { }
  ngAfterViewInit() {

    this.getPromociones();
    setTimeout(
      () => this.initListAnimation(), 500
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

  getPromociones(){
    this.promocionesServ.getPromociones()
    .subscribe(
      resp=>{
        this.promociones = resp.items;
      }
    )
  }

  getDetails(id:any){
      this.router.navigate(['/detalle/',id]);
  }

}
