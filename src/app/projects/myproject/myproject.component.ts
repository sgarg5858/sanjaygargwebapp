import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppstateService } from 'src/app/services/appstate.service';
import { Project } from '../project.service';

@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.scss']
})
export class MyprojectComponent implements OnInit,OnDestroy {

  @Input() project:Project;
  darkModeOn:boolean;
  darkModeSubscription:Subscription
  constructor(private appStateService:AppstateService) { }

  ngOnInit(): void {
    this.darkModeSubscription=this.appStateService.darkModeBehaviorSubject.subscribe((dark:boolean)=>{
      this.darkModeOn=dark;
    })
  }
  ngOnDestroy()
  {
    this.darkModeSubscription.unsubscribe();
  }

}
