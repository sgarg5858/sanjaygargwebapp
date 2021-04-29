import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum ProjectType{
  PERSONAL='Personal',
  COMPANY='Company'
}

export interface Project{
  name:string;
  techstack: string[];
  projectInfo:string;
  projectDetailedInfo:string;
  rolesAndResponsibilies:string[];
  type:ProjectType
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  projects:Project[]=[
    {
      name:"Meridian",
      techstack:["Angular 9","Angular Material","Typescript","Node.js","Html5","Css3"],
      projectInfo:"A platform where people can meet, collaborate and attend events.",
      projectDetailedInfo:
      "Users can create their own meeting rooms,schedule meetings with the recurring feature.The meeting room can be configured according to requirements like Password required or not, Maximum Participants, and many more.",
      rolesAndResponsibilies:[
        "Developed the business logic for creating meetings, scheduling meetings, and the recurring feature for the same and ensuring better UI/UX all time.",
        "Implemented the best practices of Angular for better performance like onPush strategy for ChangeDetection , NgZone, LazyLoading, Rxjs and Router Guards.",
        "Refactored the frontend and implemented the logic for making the application multi-tenant."
      ],
      type:ProjectType.COMPANY
    },
    {
      name:"GNO",
      techstack:["Angular 9","Angular Material","Typescript","Node.js","Html 5","Css 3"],
      projectInfo:"A platform where people can create and take surveys.",
      projectDetailedInfo:"One can create the survey and share the link with users. One can see all the live surveys and take surveys. The creator can see all the responses with different types of charts.",
      rolesAndResponsibilies:[
        "Developed the business logic for showing all the surveys where users can search and sort surveys.",
        "Developed my surveys for creators where one can manage their surveys like edit, delete or see responses.",
        "Implemented Event Bubbling and Delegation to improve performance in above sections."
      ],
      type:ProjectType.COMPANY
    },
    {
      name:"Devgram",
      techstack:["Angular 9","Angular Material","Typescript","Firebase","Html 5","Css 3"],
      projectInfo:"A platform where developers can connect with each other.",
      projectDetailedInfo:"Users can create their own profile where they can show their skills and can also see other users profile with the ability to search by name and location.",
      rolesAndResponsibilies:[
        "Developed this entire project."
      ],
      type:ProjectType.PERSONAL
    }
  ] 

  getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
