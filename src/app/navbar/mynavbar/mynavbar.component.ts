import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mynavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls: ['./mynavbar.component.scss']
})
export class MynavbarComponent implements OnInit {

  @Input() darkModeOn:boolean;
  @Input() isSideNavOpen:string;
  @Output() sideNavOpened:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }
  

  ngOnInit(): void {
  }
  toggleSideNav(){
    this.sideNavOpened.emit("toggled");
  }

  

}
