import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataWebService {



  private classInfo ="card-body cc-experience-header"
  
  private titlesWorkExp = 
  [
    { dates: 'MARCH 2016 - PRESENT', level:'CREATIVEM',title: 'Front End Developer', school: '', data:'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.' },
    { dates: 'APRIL 2014 - MARCH 2016', level:'WEBNOTE',title: 'Web Developer', school: '' ,data:'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.'},
    { dates: 'APRIL 2013 - FEBRUARY 2014', level:'WEBM',title: 'Intern', school: '',data:'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.' }
  ];;
  
  private classIEdu ='card-body cc-education-header'

  private titlesEduccation = 
  [
    { dates: '2013-2015', level:'Masters Degree',title: 'Master of Information Technology', school: 'UNIVERSITY OF COMPUTER SCIENCE', data:'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.' },
    { dates: '2009-2013', level:'Bachelors Degree',title: 'Bachelor of Computer Science', school: 'UNIVERSITY OF COMPUTER SCIENCE' ,data:'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.'},
    { dates: '2007-2009', level:'High School',title: 'Science and Mathematics', school: 'SCHOOL OF SECONDARY BOARD xx',data:'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.' }
  ];




  get WorkExpClassProp() 
  {
    return this.classInfo;
  }

  get WorkExpPropTitles() 
  {
    return this.titlesWorkExp;
  }


  get EduClassProp() 
  {
    return this.classIEdu;
  }

  get EducTitles() 
  {
    return this.titlesEduccation;
  }



  constructor() { }
}
