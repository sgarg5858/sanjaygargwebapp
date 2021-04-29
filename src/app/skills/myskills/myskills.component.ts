import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AppstateService } from 'src/app/services/appstate.service';
import { Skill } from '../Skill';



@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit,OnDestroy {

  constructor(private title:Title,private appStateService:AppstateService) { }

  darkModeOn:boolean=false;
  darkModeSubscription:Subscription;
  skills:Skill[]=[
    {name:"Angular",url:'../../../assets/angular.png'},
    {name:"Rxjs",url:'../../../assets/rxjs.svg'},
    {name:"Ngrx",url:'../../../assets/ngrx.svg'},
    {name:"Javascript",url:'../../../assets/node.png'},
    {name:"Html5",url:'../../../assets/html.png'},
    {name:"CSS3",url:'../../../assets/css.png'}
  ]

  ngOnInit(): void {

    this.darkModeSubscription= this.appStateService.darkModeBehaviorSubject.subscribe((darkmode:boolean)=>{
      this.darkModeOn=darkmode;
    })

  }
  ngOnDestroy()
  {
    this.darkModeSubscription.unsubscribe();
  }

}
