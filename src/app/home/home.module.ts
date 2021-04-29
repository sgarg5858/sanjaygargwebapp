import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyhomeComponent } from './myhome/myhome.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:MyhomeComponent},
  {path:'',component:MyhomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }




@NgModule({
  declarations: [
    MyhomeComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    HomeRoutingModule

  ],
  exports:[]
})
export class HomeModule { }

