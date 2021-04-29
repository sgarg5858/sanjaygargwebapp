import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  public darkModeBehaviorSubject = new BehaviorSubject<Boolean>(false);
  
  constructor() { }
}
