import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, CRouting } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './Website/header/header.component';

import { FooterComponent } from './Website/footer/footer.component';

import { MaterialModule } from './Website/material/material.module';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';

import { UniversityService } from './Website/Services/university.service';
import { LoginService } from './Website/Services/LoginService/login.service';
import { JobsService } from './Website/Services/JobsService/jobs.service';
import { EventPostingService } from './Website/Services/EventsService/event-posting.service';
import { CountryService } from './Website/Services/CountryService/country.service';
import { CityService } from './Website/Services/CityService/city.service';

import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AreaOfExpertiseService } from './Website/Services/AreaOfExpertiseService/AreaOfExpertise.service';
import { PasswordModule } from 'primeng/password';
import { YearsOfExperienceService } from './Website/Services/YearsOfExperience/years-of-experience.service';

import { UserSkillsService } from './Website/Services/UserSkills/user-skills.service';
import { UserAnswersService } from './Website/Services/UserAnswers/user-answers.service';
import { SkillsService } from './Website/Services/Skills/skills.service';
import { SegmentsService } from './Website/Services/Segments/segments.service';
import { RequirementsService } from './Website/Services/Requirements/requirements.service';
import { QuestionsChoicesService } from './Website/Services/QuestionsChoices/questions-choices.service';
import { JobFormService } from './Website/Services/JobForm/job-form.service';
import { JobApplyService } from './Website/Services/JobApply/job-apply.service';
import { JobApplianceStatusService } from './Website/Services/JobApplianceStatus/job-appliance-status.service';
import { CorporatesService } from './Website/Services/Corporates/corporates.service';

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
