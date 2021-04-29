import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../Skill';

@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.scss']
})
export class MyskillComponent implements OnInit {

  @Input() skill:Skill;
  constructor() { }

  ngOnInit(): void {
  }

}
