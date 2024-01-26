import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

//components
import { WorkExperienceComponent } from 'src/app/components/work-experience/work-experience.component';
import { EducationComponent } from 'src/app/components/education/education.component';
import { PortfolioComponent } from 'src/app/components/portfolio/portfolio.component';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { AboutComponent } from 'src/app//components/about/about.component';
import { ContactmeComponent } from 'src/app/components/contactme/contactme.component';
import { ReferencesComponent } from 'src/app/components/references/references.component';


const appRoutes: Routes = 
[
  {path: '', redirectTo:'about', pathMatch: 'full'},
  {path: 'about', 
          component: AboutComponent},
  {path: 'skill', 
          component: SkillComponent},
  {path: 'portfolio', 
          component: PortfolioComponent},
  {path: 'experience', 
          component: WorkExperienceComponent},
  {path: 'education', 
          component: EducationComponent},
  {path: 'references', 
          component: ReferencesComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
