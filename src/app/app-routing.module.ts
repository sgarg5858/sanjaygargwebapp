import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // lazy loading project and skills modules
  {path:'projects',loadChildren:()=> import('./projects/projects.module').then(m=>m.ProjectsModule)},
  {path:'skills',loadChildren:()=> import('./skills/skills.module').then(m=>m.SkillsModule)},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
