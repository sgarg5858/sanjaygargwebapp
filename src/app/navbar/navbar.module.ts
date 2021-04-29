import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';



@NgModule({
  declarations: [
    MynavbarComponent,
    SidenavbarComponent
  ],
  exports:[MynavbarComponent,SidenavbarComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ]
})
export class NavbarModule { }
