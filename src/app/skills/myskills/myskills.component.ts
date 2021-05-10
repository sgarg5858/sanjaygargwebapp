import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
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
    {name:"Angular",url:'../../../assets/angular.png',placeholder:'../../../assets/placeholder.png'},
    {name:"Rxjs",url:'../../../assets/rxjs.svg',placeholder:'../../../assets/placeholder.png'},
    {name:"Ngrx",url:'../../../assets/ngrx.svg',placeholder:'../../../assets/placeholder.png'},
    {name:"PWA",url:'../../../assets/pwa.svg',placeholder:'../../../assets/placeholder.png'},
    {name:"Typescript",url:'../../../assets/typescript.png',placeholder:'../../../assets/placeholder.png'},
    {name:"Javascript",url:'../../../assets/node.png',placeholder:'../../../assets/placeholder.png'},
    {name:"Html5",url:'../../../assets/html.png',placeholder:'../../../assets/placeholder.png'},
    {name:"CSS3",url:'../../../assets/css.png',placeholder:'../../../assets/placeholder.png'},
    
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
