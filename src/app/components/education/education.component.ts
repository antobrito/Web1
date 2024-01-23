import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  
  classEdu: any;
  listEdu: any;
 
  // agregamos inyeccion de dependencia
  constructor(private dataService:DataWebService ) { }

  ngOnInit(): void {
     
    this.classEdu = this.dataService.EduClassProp;
    this.listEdu = this.dataService.EducTitles;
     
  }

}
