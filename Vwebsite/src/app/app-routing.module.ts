import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ContactusComponent } from './contactus/contactus.component';

// import { EventsComponent } from './events/events.component';
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
import { JobListComponent } from './Job/add-job/job-list/job-list.component';
import { EventListComponent } from './Event/add-event/event-list/event-list.component';
import { AddJobComponent } from './Job/add-job/add-job.component';
import { JobDetailsComponent } from './Job/add-job/job-details/job-details.component';
import { EventDetailsComponent } from './Event/add-event/event-details/event-details.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/organizations', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'joblist', component: JobListComponent },
  { path: 'jobdetails/:id', component: JobDetailsComponent },
  { path: 'addjob', component: AddJobComponent },
  { path: 'eventlist', component: EventListComponent },
  { path: 'addevent', component: AddEventComponent },
  { path: 'eventdetails/:id', component: EventDetailsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'contactus', component: ContactusComponent },

  { path: 'organizations', component: OrganizationsComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'profile',
    component: ProfileComponent,
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
  EventDetailsComponent,
  JobDetailsComponent,
  AddEventComponent,
  SigninComponent,
  AddJobComponent,
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
