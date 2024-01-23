import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-banner-info',
  templateUrl: './banner-info.component.html',
  styleUrls: ['./banner-info.component.css']
})
export class BannerInfoComponent implements OnInit {


  @Input() dateAux:string = '';
  @Input() levelAux:string = '';
  @Input() titleBox:string = '';
  @Input() schoolAux:string = '';
  @Input() dataAux:string = '';
  @Input() classAux:string  = '';
  
  
 

  constructor() { 

    
  }

  ngOnInit(): void {

    
  }

}
