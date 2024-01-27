import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataWebService {



  private classInfo ="card-body cc-experience-header"

  private aboutMe = 
  { line1:'Hello! I am Antonio Brito. Web Developer, Graphic Designer and Photographer.',
    line2:'Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and FontAwesome, this modern and responsive design template is perfect to showcase your portfolio, skills and experience.',
    Age: '34', Email:'antubrito@gmail.com', Phone:'519-111-0011', Address:'140, City Center, TORONTO, ON, CANADA',Language: 'Spanish,English'
  }
  
  private referencesData =
  [
    {
     Image:'assets/images/reference-image-1.jpg',
     Name:'Aiyana',
     Position: 'CEO / WEBM', 
     Ref:'Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.' 
    },
    {
      Image:'assets/images/reference-image-2.jpg',
      Name:'Braiden',
      Position: 'CEO / Creativem', 
      Ref:'Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.' 
     },

     {
      Image:'assets/images/reference-image-3.jpg',
      Name:'Alexander',
      Position: 'CEO / Webnote', 
      Ref:'Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.' 
     }
 

  ]

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
    { dates: '2007-2009', level:'High School',title: 'Science and Mathematics', school: 'SCHOOL OF SECONDARY BOARD',data:'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.' }
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

 get About()
 {

  return this.aboutMe;
}

get references()
{

  return this.referencesData;

}
  constructor() { }
}


