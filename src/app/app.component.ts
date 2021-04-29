import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { AppstateService } from './services/appstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sanjaygargwebapp';

  isSideNavOpen :boolean =false;
  
  darkModeOn :boolean =false;

  constructor(private overlayContainer:OverlayContainer,private appStateService:AppstateService){}

  ngOnInit()
  {
    const darkModeFromLocalStorage = localStorage.getItem("darkMode");
    if(darkModeFromLocalStorage && darkModeFromLocalStorage == "true"){
      this.darkModeOn = true;
      this.appStateService.darkModeBehaviorSubject.next(this.darkModeOn);
    }

  }


  toggleSideNav(source:string){
    this.isSideNavOpen = source == 'open' ? true :false;
  }

  toggleDarkMode(event){

    this.darkModeOn = !this.darkModeOn;
    this.appStateService.darkModeBehaviorSubject.next(this.darkModeOn);
    //Synchrnizing the localStorage
    let valueForLocalStoarge = this.darkModeOn.toString();
    localStorage.setItem("darkMode",valueForLocalStoarge);


    //For overlay elements like mat dialog and dynamically created elements
    //as they are not in app hierarchy
    const classesOfOverlayElements = this.overlayContainer.getContainerElement().classList;

    if(this.darkModeOn)
    {
      classesOfOverlayElements.add("darkMode")
    }
    else
    {
      classesOfOverlayElements.remove("darkMode");
    }
    
  }

}
