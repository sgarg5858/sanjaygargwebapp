import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss']
})
export class CustomSnackbarComponent implements OnInit {

  info:string;
  constructor(@Inject(MAT_SNACK_BAR_DATA)private message:string,private snackbar:MatSnackBar) { 
    this.info=this.message;
  }

  ngOnInit(): void {
  }
  close()
  {
    this.snackbar.dismiss();
  }

}
