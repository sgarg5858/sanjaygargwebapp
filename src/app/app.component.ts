import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { AppstateService } from './services/appstate.service';
import { AskUserConfirmationComponent } from './shared/ask-user-confirmation/ask-user-confirmation.component';
import { CustomSnackbarComponent } from './shared/custom-snackbar/custom-snackbar.component';

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
    private dialog:MatDialog,
    private snackbar:MatSnackBar
    ){}

  ngOnInit()
  {

    
    //Checking if user has dark mode before if user is reloading or opening again from localhost
    const darkModeFromLocalStorage = localStorage.getItem("darkMode");
    if(darkModeFromLocalStorage && darkModeFromLocalStorage == "true"){
      this.darkModeOn = true;
      this.appStateService.darkModeBehaviorSubject.next(this.darkModeOn);
      this.updateThemeForModals();
    }

    //this checks o=for the new updates of application related to PWA
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

    //For showing snackbar to user after 5 seconds that this application also supports offline.
    setTimeout(()=>{
      this.showSnackbar();
    },5000)


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

  showSnackbar(){
    this.snackbar.openFromComponent(CustomSnackbarComponent,{
      data:"Use the top right menu button to explore.",
      verticalPosition:"top",
      duration:3000,
      horizontalPosition:"right",
      panelClass:this.darkModeOn?'darkBackgroundForSnackbar':'whiteackgroundForSnackbar'
    
    })
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
