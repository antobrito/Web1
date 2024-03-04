import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { ReferencesComponent } from './components/references/references.component';
import { BannerInfoComponent } from './components/banner-info/banner-info.component';
import { EducationComponent } from './components/education/education.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import {DataWebService} from'./services/data-web.service';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillComponent } from './components/skill/skill.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { ListdataComponent } from './components/listdata/listdata.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule }  from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactmeComponent,
    ReferencesComponent,
    BannerInfoComponent,
    EducationComponent,
    WorkExperienceComponent,
    PortfolioComponent,
    SkillComponent,
    AboutComponent,
    NavComponent,
    ListdataComponent,
   

  ],
  imports: [
    BrowserModule,AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), ToastrModule.forRoot()
  ],
  providers: [DataWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
