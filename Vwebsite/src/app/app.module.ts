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
import { LoginService } from './Services/login.service';
import { JobPostingService } from './Services/job-posting.service';
import { EventPostingService } from './Services/event-posting.service';
import { CountiesService } from './Services/counties.service';
import { CitiesService } from './Services/cities.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { JobTypesService } from './Services/job-types.service';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CRouting],
  imports: [
    BrowserModule,
    NgxJsonViewerModule,
    MaterialModule,
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
    LoginService,
    JobPostingService,
    JobTypesService,
    EventPostingService,
    CountiesService,
    CitiesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
