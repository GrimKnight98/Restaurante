import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'get-platillos',
    loadChildren: () => import('./platillos/platillo/get-platillos/get-platillos.module').then( m => m.GetPlatillosPageModule)
  },
  {
    path: 'get-platillo-details/:id',
    loadChildren: () => import('./platillos/platillo/get-platillo-details/get-platillo-details.module').then( m => m.GetPlatilloDetailsPageModule)
  },
  {
    path: 'get',
    loadChildren: () => import('./pages/carrito/get/get.module').then( m => m.GetPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/signup/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'promociones',
    loadChildren: () => import('./pages/promociones/promociones/promociones.module').then( m => m.PromocionesPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/detallePromociones/detalle/detalle.module').then( m => m.DetallePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
