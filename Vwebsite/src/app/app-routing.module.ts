import { Corporates } from './Website/Model/Corporates';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './Website/signup/signup.component';
import { SigninComponent } from './Website/signin/signin.component';
import { ContactusComponent } from './Website/contactus/contactus.component';

import { OrganizationsComponent } from './Website/organizations/organizations.component';
import { AboutusComponent } from './Website/aboutus/aboutus.component';
import { PageNotFoundComponent } from './Website/page-not-found/page-not-found.component';
import { ProfileComponent } from './Website/profile/profile.component';
import { VolunteerComponent } from './Website/volunteer/Volunteer/volunteer.component';
import { SeoComponent } from './Website/Volunteer/seo/seo.component';
import { MarketingMediaComponent } from './Website/Volunteer/marketing-media/marketing-media.component';
import { DesigingComponent } from './Website/Volunteer/desiging/desiging.component';
import { WebdevelopmentComponent } from './Website/Volunteer/webdevelopment/webdevelopment.component';
import { BusinessdevelopmentComponent } from './Website/Volunteer/businessdevelopment/businessdevelopment.component';
import { PrComponent } from './Website/Volunteer/pr/pr.component';
import { JobListComponent } from './Website/User/Job/job-list/job-list.component';
import { EventListComponent } from './Website/User/Event/event-list/event-list.component';
import { JobDetailsComponent } from './Website/User/Job/job-details/job-details.component';
import { EventDetailsComponent } from './Website/User/Event/event-details/event-details.component';
import { AuthGuard } from './Website/auth/auth.guard';
import { JobApplyComponent } from './Website/User/Job/job-apply/job-apply.component';

import { AddEventOrganizationComponent } from './Website/OR/Event/add-event-organization/add-event-organization.component';
import { EventDetailsOrganizationComponent } from './Website/OR/Event/event-details-organization/event-details-organization.component';
import { EventListOrganizationComponent } from './Website/OR/Event/event-list-organization/event-list-organization.component';
import { AddJobOrganizationComponent } from './Website/OR/Job/add-job-organization/add-job-organization.component';
import { JobDetailsOrganizationComponent } from './Website/OR/Job/job-details-organization/job-details-organization.component';
import { JobListOrganizationComponent } from './Website/OR/Job/job-list-organization/job-list-organization.component';
import { ProfileOrganizationComponent } from './Website/profile-organization/profile-organization.component';
import { SignupOrganizationComponent } from './Website/signup-organization/signup-organization.component';
import { OrganizationDetailsComponent } from './Website/organization-details/organization-details.component';

import { JobFormComponent } from './Website/User/Job/job-form/job-form.component';
import { AddJobFormComponent } from './Website/OR/Job/add-job-form/add-job-form.component';
import { UserFormComponent } from './Website/User/Job/user-form/user-form.component';
import { JobApplianceComponent } from './Website/OR/Job/job-appliance/job-appliance.component';
import { UserDetailsComponent } from './Website/OR/Job/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/organizations', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'or-signup', component: SignupOrganizationComponent },

  { path: 'joblist', component: JobListComponent },
  {
    path: 'jobdetails/:id',
    canActivate: [AuthGuard],
    component: JobDetailsComponent,
  },
  {
    path: 'eventlist',
    canActivate: [AuthGuard],
    component: EventListComponent,
  },
  {
    path: 'eventdetails/:id',
    canActivate: [AuthGuard],
    component: EventDetailsComponent,
  },
  { path: 'signin', component: SigninComponent },
  { path: 'contactus', component: ContactusComponent },

  { path: 'organizations', component: OrganizationsComponent },
  {
    path: 'or-addevent',
    canActivate: [AuthGuard],
    component: AddEventOrganizationComponent,
    data: {
      Corporate: true,
    },
  },
  {
    path: 'or-addjob',
    canActivate: [AuthGuard],
    component: AddJobOrganizationComponent,
    data: {
      Corporate: true,
    },
  },
  {
    path: 'or-jobappliance/:id',
    canActivate: [AuthGuard],
    component: JobApplianceComponent,
    data: {
      Corporate: true,
    },
  },
  {
    path: 'or-eventdetails/:id',
    canActivate: [AuthGuard],
    component: EventDetailsOrganizationComponent,
    data: {
      Corporate: true,
    },
  },
  {
    path: 'or-jobdetails/:id',
    canActivate: [AuthGuard],
    component: JobDetailsOrganizationComponent,
    data: {
      Corporate: true,
    },
  },
  {
    path: 'organizationdetails/:id',
    canActivate: [AuthGuard],
    component: OrganizationDetailsComponent,
    data: {
      Corporate: true,
    },
  },
  {
    path: 'or-eventlist',
    canActivate: [AuthGuard],
    component: EventListOrganizationComponent,
    data: {
      Corporate: true,
    },
  },
  {
    path: 'or-joblist',
    canActivate: [AuthGuard],
    component: JobListOrganizationComponent,
    data: {
      Corporate: true,
    },
  },
  {
    path: 'jobform/:id',
    canActivate: [AuthGuard],
    component: JobFormComponent,
  },
  {
    path: 'userjobform/:id',
    canActivate: [AuthGuard],
    component: UserFormComponent,
  },
  {
    path: 'or-addjobform/:id',
    canActivate: [AuthGuard],
    component: AddJobFormComponent,
    data: {
      Corporate: true,
    },
  },
  {
    path: 'or-userdetails/:id',
    canActivate: [AuthGuard],
    component: UserDetailsComponent,
    data: {
      Corporate: true,
    },
  },

  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
  },
  {
    path: 'jobapply',
    canActivate: [AuthGuard],
    component: JobApplyComponent,
  },
  {
    path: 'or-profile',
    canActivate: [AuthGuard],
    component: ProfileOrganizationComponent,
    data: {
      Corporate: true,
    },
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
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
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
  OrganizationDetailsComponent,
  JobApplianceComponent,
  AddJobOrganizationComponent,
  JobDetailsOrganizationComponent,
  JobApplyComponent,
  JobListOrganizationComponent,
  EventDetailsComponent,
  JobDetailsComponent,
  UserDetailsComponent,
  SigninComponent,
  ContactusComponent,
  JobListComponent,
  EventListComponent,
  UserFormComponent,
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
