import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CorporatesService } from '../Services/Corporates/corporates.service';
import { AreaOfExpertiseService } from '../Services/AreaOfExpertiseService/AreaOfExpertise.service';
import { CityService } from '../Services/CityService/city.service';
import { CountryService } from '../Services/CountryService/country.service';
import { Corporates } from '../Corporates';
@Component({
  selector: 'app-profile-organization',
  templateUrl: './profile-organization.component.html',
  styleUrls: ['./profile-organization.component.css'],
})
export class ProfileOrganizationComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  // CorporateData: Corporates = <Corporates>{};
  // AreaOfExpertise: any;
  // City: any;
  // Country: any;
  // constructor(
  //   private route: ActivatedRoute,
  //   private http: HttpClient,
  //   public CorporatesService: CorporatesService,
  //   private AreaOfExpertiseService: AreaOfExpertiseService,
  //   private CityService: CityService,
  //   private CountryService: CountryService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.CorporatesService.GetCorporates().subscribe((data) => {
  //     this.CorporateData = <Corporates>data;
  //   });
  //   this.AreaOfExpertiseService.GetAreaOfExpertiseList().subscribe((res) => {
  //     this.AreaOfExpertise = res;
  //   });
  //   this.CityService.GetCityList().subscribe((res) => {
  //     this.City = res;
  //   });
  //   this.CountryService.GetCountryList().subscribe((res) => {
  //     this.Country = res;
  //   });
  // }
  // DeleteUsers() {
  //   this.CorporatesService.DeleteCorporates();
  // }
  // SaveChanges(changes) {
  //   if (confirm('Are you sure to save this record ?') == true) {
  //     this.CorporatesService.PutCorporates(changes).subscribe((data) => {
  //       this.CorporateData = data;
  //     });
  //   }
  // LogOut() {

  //   this.LoginService.LogOut();
  //   this.router.navigate(['/signin']);

  // }
}
