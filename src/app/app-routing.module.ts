import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'coffee', loadChildren: './page/coffee/coffee.module#CoffeePageModule' },
  { path: 'extas', loadChildren: './page/extas/extas.module#ExtasPageModule' },
  { path: 'recipt', loadChildren: './page/recipt/recipt.module#ReciptPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
