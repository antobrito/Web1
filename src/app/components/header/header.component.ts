import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private renderer: Renderer2) {
    

   }

   downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '');
    link.setAttribute('download', `CV_ANTONIO_BRITO_2023.pdf`);
    link.click();
    link.remove();
 }


  ngOnInit(): void {
  }

}
