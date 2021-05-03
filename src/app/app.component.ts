import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwUpdate } from '@angular/service-worker';
import { AppstateService } from './services/appstate.service';
import { AskUserConfirmationComponent } from './shared/ask-user-confirmation/ask-user-confirmation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sanjaygargwebapp';

  isSideNavOpen :boolean =false;
  
  darkModeOn :boolean =false;

  constructor(
    private overlayContainer:OverlayContainer,
    private appStateService:AppstateService,
    private swUpdate:SwUpdate,
    private dialog:MatDialog
    ){}

  ngOnInit()
  {
    const darkModeFromLocalStorage = localStorage.getItem("darkMode");
    if(darkModeFromLocalStorage && darkModeFromLocalStorage == "true"){
      this.darkModeOn = true;
      this.appStateService.darkModeBehaviorSubject.next(this.darkModeOn);
      this.updateThemeForModals();
    }

    if(this.swUpdate.isEnabled)
    {
      this.swUpdate.available.subscribe(()=>{

        // Add confirm modal here
        const dialogRef=this.dialog.open(AskUserConfirmationComponent,{
          data:"New updates available. Click yes to load ",
          height:'160px',
          width:'auto',
          minWidth:'300px',
          disableClose:true
        })
        dialogRef.afterClosed().subscribe((response:boolean)=>{
          if(response)
          {
            window.location.reload();
          }
        })

      })
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
    this.updateThemeForModals();
    
  }
  updateThemeForModals()
  {
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
