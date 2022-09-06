import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
