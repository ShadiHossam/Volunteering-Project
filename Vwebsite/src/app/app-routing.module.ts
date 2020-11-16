import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PORComponent } from './p-or/p-or.component';
import { SignupORComponent } from './signup-or/signup-or.component';
import { EventsComponent } from './events/events.component';
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
import { MembersComponent } from './profile/members/members.component';
import { PProfileComponent } from './p-profile/p-profile.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/organizations', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'P/OR', component: PORComponent },
  { path: 'signup-OR', component: SignupORComponent },
  { path: 'organizations', component: OrganizationsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],

  },
  {
    path: 'members',
    component: MembersComponent,
    canActivate: [AuthGuard],
  },

  

  { path: 'volunteer', component: VolunteerComponent },
  { path: 'bd', component: BusinessdevelopmentComponent },
  { path: 'desiging', component: DesigingComponent },
  { path: 'mm', component: MarketingMediaComponent },
  { path: 'seo', component: SeoComponent },
  { path: 'wd', component: WebdevelopmentComponent },
  { path: 'pr', component: PrComponent },

  {
    path: 'p-profile',
    component: PProfileComponent,
    canActivate: [AuthGuard],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const CRouting = [
  SignupComponent,
  SigninComponent,
  ContactusComponent,
  PORComponent,
  SignupORComponent,
  EventsComponent,
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
  MembersComponent,
  PProfileComponent,
 
];
