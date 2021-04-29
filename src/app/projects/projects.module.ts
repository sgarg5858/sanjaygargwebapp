import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { MyprojectComponent } from './myproject/myproject.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:MyprojectsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }





@NgModule({
  declarations: [
    MyprojectsComponent,
    MyprojectComponent,
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    ProjectsRoutingModule
  ],
  exports:[
  ]
})
export class ProjectsModule { }
