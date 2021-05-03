import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskUserConfirmationComponent } from './ask-user-confirmation/ask-user-confirmation.component';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';



@NgModule({
  declarations: [
    AskUserConfirmationComponent,
    CustomSnackbarComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports:[
    AskUserConfirmationComponent,
    CustomSnackbarComponent
  ]
})
export class SharedModule { }
