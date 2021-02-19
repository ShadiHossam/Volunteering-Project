import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, CRouting } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';

import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MaterialModule } from './material/material.module';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';

import { UniversityService } from './Services/university.service';
import { LoginService } from './Services/LoginService/login.service';
import { JobsService } from './Services/JobsService/jobs.service';
import { EventPostingService } from './Services/EventsService/event-posting.service';
import { CountryService } from './Services/CountryService/country.service';
import { CityService } from './Services/CityService/city.service';

import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AreaOfExpertiseService } from './Services/AreaOfExpertiseService/AreaOfExpertise.service';
import { PasswordModule } from 'primeng/password';
import { YearsOfExperienceService } from './Services/YearsOfExperience/years-of-experience.service';

import { UserSkillsService } from './Services/UserSkills/user-skills.service';
import { UserAnswersService } from './Services/UserAnswers/user-answers.service';
import { SkillsService } from './Services/Skills/skills.service';
import { SegmentsService } from './Services/Segments/segments.service';
import { RequirementsService } from './Services/Requirements/requirements.service';
import { QuestionsChoicesService } from './Services/QuestionsChoices/questions-choices.service';
import { JobFormService } from './Services/JobForm/job-form.service';
import { JobApplyService } from './Services/JobApply/job-apply.service';
import { JobApplianceStatusService } from './Services/JobApplianceStatus/job-appliance-status.service';
import { CorporatesService } from './Services/Corporates/corporates.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CRouting],
  imports: [
    BrowserModule,
    NgxJsonViewerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    RouterModule,
    NgbModule,
    NbThemeModule,
    NbLayoutModule,
    NbEvaIconsModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    RippleModule,
    PasswordModule,
    ToastrModule.forRoot({
      progressBar: true,
    }),
  ],

  providers: [
    UniversityService,
    HttpClient,
    LoginService,
    JobsService,
    AreaOfExpertiseService,
    YearsOfExperienceService,
    EventPostingService,
    CountryService,
    CityService,
    UserSkillsService,
    SkillsService,
    SegmentsService,
    UserAnswersService,
    RequirementsService,
    QuestionsChoicesService,
    JobFormService,
    JobApplyService,
    JobApplianceStatusService,
    CorporatesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
