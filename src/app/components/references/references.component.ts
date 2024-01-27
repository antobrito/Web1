import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {


  refData: any;


  constructor(private dataService:DataWebService) { }

  ngOnInit(): void {

     this.refData = this.dataService.references;

  }



}
