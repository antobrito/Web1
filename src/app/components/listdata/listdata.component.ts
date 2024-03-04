import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit {

  jobsList: any[] =[];
   

  constructor(private _dataService:DataWebService,
              private toastr: ToastrService) { 
  }
  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {

    this._dataService.getJobsSnap().subscribe(data=> {
       this.jobsList = [];
       data.forEach((element:any) => 
       {
       
       this.jobsList.push({
                       id:element.payload.doc.id,
                       ...element.payload.doc.data()
                       })
       });
          console.log(this.jobsList);
     });
       //console.log(element.payload.doc.id);
       //console.log(element.payload.doc.data());
     }
     
     deleteJob(id: string)
     {
   
       this._dataService.deleteJob(id).then(() => {
   
       console.log('Job deleted successfully ');
       this.toastr.success('Job was deleted sucessfully', 'Job Deletion!',
          {positionClass:'toast-center-center'}
        );
   
       }).catch ( error => {this.toastr.success('Job was deleted sucessfully', 'Job Deletion!',
       {positionClass:'toast-center-center'}); 
                         
        }) 
   
     } // end deleteJob
}
