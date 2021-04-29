import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyskillsComponent } from './myskills/myskills.component';
import { MyskillComponent } from './myskill/myskill.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:MyskillsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }



@NgModule({
  declarations: [
    MyskillsComponent,
    MyskillComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    SkillsRoutingModule

  ],
  exports:[
  ]
})
export class SkillsModule { }
