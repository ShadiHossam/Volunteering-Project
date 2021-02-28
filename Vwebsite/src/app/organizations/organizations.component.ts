import { Register } from './../Model/register';
import { Component, OnInit } from '@angular/core';
import { JobsService } from './../Services/JobsService/jobs.service';
import { LoginService } from './../Services/LoginService/login.service';
import { Filter } from './../Model/Filter';
import { Router } from '@angular/router';
import { AreaOfExpertiseService } from './../Services/AreaOfExpertiseService/AreaOfExpertise.service';
import { YearsOfExperienceService } from './../Services/YearsOfExperience/years-of-experience.service';
import { CountryService } from './../Services/CountryService/country.service';
import { CityService } from './../Services/CityService/city.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Corporates } from '../Model/Corporates';
import { CorporatesService } from '../Services/Corporates/corporates.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
})
export class OrganizationsComponent implements OnInit {
  CorporatesData: Corporates[];
  Filter: FormGroup = new FormGroup({});
  City;
  Country;
  constructor(
    public CorporatesService: CorporatesService,

    private cityService: CityService,
    private CountryService: CountryService,
    private formbulider: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    this.CorporatesService.GetCorporatesList().subscribe((data) => {
      this.CorporatesData = <Corporates[]>data;
      console.log(data);
    });
    this.Filter = this.formbulider.group({
      CountryId: [''],
      CityId: [''],
    });

    this.cityService.GetCityList().subscribe((res) => {
      this.City = res;
    });
    this.CountryService.GetCountryList().subscribe((res) => {
      this.Country = res;
    });
  }
  onFormSubmit(x) {
    console.log(this.Filter.value);
    this.CorporatesService.Filter(x).subscribe((x: any) => {
      this.CorporatesData = x;
    });
  }
}
