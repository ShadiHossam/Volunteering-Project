import { Corporates } from './Model/Corporates';
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
import { JobApplyComponent } from './User/Job/job-apply/job-apply.component';

import { AddEventOrganizationComponent } from './Or/Event/add-event-organization/add-event-organization.component';
import { EventDetailsOrganizationComponent } from './Or/Event/event-details-organization/event-details-organization.component';
import { EventListOrganizationComponent } from './Or/Event/event-list-organization/event-list-organization.component';
import { AddJobOrganizationComponent } from './Or/Job/add-job-organization/add-job-organization.component';
import { JobDetailsOrganizationComponent } from './Or/Job/job-details-organization/job-details-organization.component';
import { JobListOrganizationComponent } from './Or/Job/job-list-organization/job-list-organization.component';
import { ProfileOrganizationComponent } from './profile-organization/profile-organization.component';
import { SignupOrganizationComponent } from './signup-organization/signup-organization.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';

import { JobFormComponent } from './User/Job/job-form/job-form.component';
import { AddJobFormComponent } from './Or/Job/add-job-form/add-job-form.component';
import { UserFormComponent } from './User/Job/user-form/user-form.component';

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
  AddJobOrganizationComponent,
  JobDetailsOrganizationComponent,
  JobApplyComponent,
  JobListOrganizationComponent,
  EventDetailsComponent,
  JobDetailsComponent,
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
