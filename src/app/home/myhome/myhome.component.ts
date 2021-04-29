import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AppstateService } from 'src/app/services/appstate.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss']
})
export class MyhomeComponent implements OnInit,OnDestroy {

  darkModeSubscription:Subscription;
  darkModeOn:boolean=false;
  constructor(private title:Title,private appStateService:AppstateService) { }

  ngOnInit(): void {
    this.title.setTitle("Sanjay Garg - Home");
    this.darkModeSubscription= this.appStateService.darkModeBehaviorSubject.subscribe((darkMode :boolean)=>{
      this.darkModeOn=darkMode
    })
    
  }
  
  ngOnDestroy(){
    this.darkModeSubscription.unsubscribe();
  }

}
