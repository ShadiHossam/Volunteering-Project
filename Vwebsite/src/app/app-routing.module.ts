import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ContactusComponent } from './contactus/contactus.component';

import { OrganizationsComponent } from './organizations/organizations.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { SeoComponent } from './volunteer/seo/seo.component';
import { MarketingMediaComponent } from './volunteer/marketing-media/marketing-media.component';
import { DesigingComponent } from './volunteer/desiging/desiging.component';
import { WebdevelopmentComponent } from './volunteer/webdevelopment/webdevelopment.component';
import { BusinessdevelopmentComponent } from './volunteer/businessdevelopment/businessdevelopment.component';
import { PrComponent } from './volunteer/pr/pr.component';
import { JobListComponent } from './User/Job/job-list/job-list.component';
import { EventListComponent } from './User/Event/event-list/event-list.component';
import { JobDetailsComponent } from './User/Job/job-details/job-details.component';
import { EventDetailsComponent } from './User/Event/event-details/event-details.component';
import { AuthGuard } from './auth/auth.guard';
import { AddEventOrganizationComponent } from './Or/Event/add-event-organization/add-event-organization.component';
import { EventDetailsOrganizationComponent } from './Or/Event/event-details-organization/event-details-organization.component';
import { EventListOrganizationComponent } from './Or/Event/event-list-organization/event-list-organization.component';
import { AddJobOrganizationComponent } from './Or/Job/add-job-organization/add-job-organization.component';
import { JobDetailsOrganizationComponent } from './Or/Job/job-details-organization/job-details-organization.component';
import { JobListOrganizationComponent } from './Or/Job/job-list-organization/job-list-organization.component';
import { ProfileOrganizationComponent } from './profile-organization/profile-organization.component';
import { SignupOrganizationComponent } from './signup-organization/signup-organization.component';
import { JobFormComponent } from './User/Job/job-form/job-form.component';
import { AddJobFormComponent } from './Or/Job/add-job-form/add-job-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/organizations', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'organizationsignup', component: SignupOrganizationComponent },

  { path: 'joblist', component: JobListComponent },
  { path: 'jobdetails/:id', component: JobDetailsComponent },
  { path: 'eventlist', component: EventListComponent },
  { path: 'eventdetails/:id', component: EventDetailsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'contactus', component: ContactusComponent },

  { path: 'organizations', component: OrganizationsComponent },
  { path: 'or-addevent', component: AddEventOrganizationComponent },
  { path: 'or-addjob', component: AddJobOrganizationComponent },
  { path: 'or-eventdetails/:id', component: EventDetailsOrganizationComponent },
  { path: 'or-jobdetails/:id', component: JobDetailsOrganizationComponent },
  { path: 'or-eventlist', component: EventListOrganizationComponent },
  { path: 'or-joblist', component: JobListOrganizationComponent },
  { path: 'jobform/:id', component: JobFormComponent },
  { path: 'addjobform/:id', component: AddJobFormComponent },

  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'organizatiomprofile',
    component: ProfileOrganizationComponent,
  },

  { path: 'volunteer', component: VolunteerComponent },
  { path: 'bd', component: BusinessdevelopmentComponent },
  { path: 'desiging', component: DesigingComponent },
  { path: 'mm', component: MarketingMediaComponent },
  { path: 'seo', component: SeoComponent },
  { path: 'wd', component: WebdevelopmentComponent },
  { path: 'pr', component: PrComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const CRouting = [
  SignupComponent,
  EventListOrganizationComponent,
  AddEventOrganizationComponent,
  EventDetailsOrganizationComponent,
  ProfileOrganizationComponent,
  SignupOrganizationComponent,
  JobFormComponent,
  AddJobFormComponent,
  AddJobOrganizationComponent,
  JobDetailsOrganizationComponent,
  JobListOrganizationComponent,
  EventDetailsComponent,
  JobDetailsComponent,
  SigninComponent,
  ContactusComponent,
  JobListComponent,
  EventListComponent,
  OrganizationsComponent,
  AboutusComponent,
  PageNotFoundComponent,
  ProfileComponent,
  VolunteerComponent,
  SeoComponent,
  MarketingMediaComponent,
  DesigingComponent,
  WebdevelopmentComponent,
  BusinessdevelopmentComponent,
  PrComponent,
];
