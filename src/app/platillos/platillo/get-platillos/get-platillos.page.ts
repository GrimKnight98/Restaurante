import { TiposComidaService } from './../../../services/tipos_comida/tipos-comida.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ComidaServiceService } from 'src/app/services/comida-service.service';
import { map, tap } from 'rxjs';
import { AnimationController } from '@ionic/angular';

export interface comida{
  id:number,
  imagen:string,
  nombre:string,
  descripcion:string,
  ingredientes:string,
  tipo:number,
  precio:number,
  status:number,
  fecha:string
}

@Component({
  selector: 'app-get-platillos',
  templateUrl: './get-platillos.page.html',
  styleUrls: ['./get-platillos.page.scss'],
})
export class GetPlatillosPage implements AfterViewInit {
  
  @ViewChildren('templateList', { read: ElementRef })
  templateListRef: any;

  platillos :any = [];
  tipoComidas: any = [];

  constructor(
    private http:HttpClient, 
    private comidaServ: ComidaServiceService, 
    private router:Router, 
    private tComida: TiposComidaService,
    private animation: AnimationController
    ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {   
    this.getComida();
    this.getTiposComida();
    setTimeout(
      () => this.initListAnimation(), 500
    );
    
  }

  initListAnimation(){
    const itemRefArray = this.templateListRef.toArray();
    for (let index = 0; index < itemRefArray.length; index++) {
      const element = itemRefArray[index].nativeElement;

      this.animation
        .create()
        .addElement(element)
        .duration(1000)
        .delay(index * (1000 / 3))
        .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
        .fromTo('transform', 'translateY(50px)', 'translateY(0px)')
        .fromTo('opacity', '0', '1')
        .play();

      
    }
  }
 
  comidaDetails(id:any){
    this.router.navigate(['/get-platillo-details/', id]);
  }

  getComida(){
    this.comidaServ.getComidas().subscribe(
      resp => {
        //console.log(resp.items);
        this.platillos = resp.items;    
      }
    )
  }

    // getComida(){
    //   this.comidaServ.getComidas()
    //   .pipe(
    //     tap((comidas:comida[]) => this.platillos= comidas)
    //   )
    //   .subscribe()
    //   console.log(this.platillos);
      
    // }

  // getComida(){
  //   this.comidaServ.getComidas()
  //   .pipe(
  //     map((res:any)=>{
  //         return res.items;
  //        })
  //   )
  //   .subscribe(
  //     (res:any)=>{
  //         this.platillos = res;
  //      }
  //   )
  // }

  // getComida(){
  //   this.comidaServ.getComidas()
  //   .subscribe(
  //     (res:any)=>{
  //       this.platillos = res;
  //     }
  //   )
  // }

  getTiposComida(){
    this.tComida.getTipoComidas().subscribe(
      (res:any)=>{
        this.tipoComidas = res;
        console.log(this.tipoComidas);
        
      }

    )
  }

  onChange(value:any){
    console.log(value);
    this.comidaServ.getComidaxTipo(value).subscribe(
      (res:any)=>{
        this.platillos = res;
      }
    )
    setTimeout(
      () => this.initListAnimation(), 500
    );
    
  }
  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      //this.getComida();
      setTimeout(
        () => this.initListAnimation(), 500
      );

      event.target.complete();
    }, 2000);
  };

  buscarNombre(event:any){
    this.comidaServ.getComidaxNombre(event.target.value).subscribe(
      (res:any)=>{
        this.platillos = res;
        console.log(this.platillos);
        
      }
    )
    setTimeout(
      () => this.initListAnimation(), 500
    );
  }

  

}
