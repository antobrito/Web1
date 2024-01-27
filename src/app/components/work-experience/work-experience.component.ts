import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {


  
  titles:any;
  classProp:any;

  constructor(private dataService:DataWebService) {
   }

  ngOnInit(): void {
    this.titles = this.dataService.WorkExpPropTitles;
    this.classProp  = this.dataService.WorkExpClassProp;
  }

}
