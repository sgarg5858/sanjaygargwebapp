import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.service';

@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.scss']
})
export class MyprojectComponent implements OnInit {

  @Input() project:Project;
  constructor() { }

  ngOnInit(): void {
  }

}
