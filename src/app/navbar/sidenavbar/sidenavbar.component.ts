import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

  @Input() darkModeOn:boolean;
  @Output() sideNavClosed:EventEmitter<string>=new EventEmitter<string>();
  @Output() toggleDarkMode:EventEmitter<string>= new EventEmitter<string>();
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  closeSideNav()
  {
    this.sideNavClosed.emit("closed");
  }
  changeTheme()
  {
    this.toggleDarkMode.emit("toggle");
  }
  navigate(to:string)
  {
    this.router.navigate([to]);
    this.closeSideNav();
  }

}
