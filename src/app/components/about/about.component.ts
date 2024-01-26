import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 
   aboutDetails : any;
 


  constructor(private dataService:DataWebService) { }

  ngOnInit(): void {
   
     this.aboutDetails = this.dataService.About;
     
  }

}
