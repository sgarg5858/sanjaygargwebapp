import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ask-user-confirmation',
  templateUrl: './ask-user-confirmation.component.html',
  styleUrls: ['./ask-user-confirmation.component.scss']
})
export class AskUserConfirmationComponent implements OnInit {

  info:string;
  constructor(@Inject(MAT_DIALOG_DATA) private data:string,private dialogRef:MatDialogRef<any>) { 
    this.info=data;
  }

  ngOnInit(): void {
  }

  confirmed()
  {
    this.dialogRef.close(true);
  }
  refused()
  {
    this.dialogRef.close(false)
  }

}
