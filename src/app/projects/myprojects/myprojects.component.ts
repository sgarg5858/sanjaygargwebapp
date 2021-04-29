import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { AppstateService } from 'src/app/services/appstate.service';
import { Project, ProjectService } from '../project.service';



@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss']
})
export class MyprojectsComponent implements OnInit,OnDestroy {

  darkModeOn:boolean;
  darkModeSubscription:Subscription;
  myProjects:Observable<Project[]>;
  myProjectHeading= `My Projects`;

  constructor(private title:Title,private appStateService:AppstateService,private projectsService:ProjectService) {
    this.title.setTitle("Sanjay Garg- Projects");
   }

  ngOnInit(): void {
    this.darkModeSubscription = this.appStateService.darkModeBehaviorSubject.subscribe((darkMode:boolean)=>{
      this.darkModeOn=darkMode;  
    })
    this.myProjects= this.projectsService.getAllProjects();
  }
  ngOnDestroy(){
    this.darkModeSubscription.unsubscribe();
  }

}
