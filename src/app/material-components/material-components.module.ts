import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';


const materialComponents=[
  MatSidenavModule,MatSlideToggleModule,MatButtonModule,MatCardModule,
  MatDialogModule,MatDividerModule,MatExpansionModule,MatIconModule,MatListModule,
  MatProgressBarModule,MatSnackBarModule,MatTabsModule,MatToolbarModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...materialComponents
  ],
  exports:[...materialComponents]
})
export class MaterialComponentsModule { }
