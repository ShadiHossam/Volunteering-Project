import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

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
  length: number = 0;
  pageSize = 10;
  pageIndex = 0;
  showFirstLastButtons = true;
  intial = { length: 0, pageIndex: 0, pageSize: 10 };
  constructor(
    public CorporatesService: CorporatesService,

    private cityService: CityService,
    private CountryService: CountryService,
    private router: Router,

    private formbulider: FormBuilder
  ) {}

  async ngOnInit() {
    this.Filter = this.formbulider.group({
      CountryId: [''],
      CityId: [''],
    });

    this.CorporatesService.GetCorporatesList()
      .toPromise()
      .then((data) => {
        this.CorporatesData = <Corporates[]>data;
      });
    this.CorporatesData = await this.CorporatesService.GetCorporatesList().toPromise();

    this.cityService.GetCityList().subscribe((res) => {
      this.City = res;
    });
    this.CountryService.GetCountryList().subscribe((res) => {
      this.Country = res;
    });
  }
  onFormSubmit(x) {
    if (!x || x === '--') {
      return false;
    }

    this.CorporatesService.Filter(x).subscribe((x: any) => {
      this.CorporatesData = x;
      this.length = this.CorporatesData.length;
    });
  }
  async handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.Filter.get('StartRecord').setValue(event.pageSize * event.pageIndex);
    this.Filter.get('RecordPerpage').setValue(
      event.pageSize * event.pageIndex + event.pageSize
    );

    this.CorporatesService.Filter(this.Filter.value)
      .toPromise()
      .then((x: any) => {
        this.CorporatesData = <Corporates[]>x;
      });
    this.CorporatesData = await this.CorporatesService.Filter(
      this.Filter.value
    ).toPromise();
  }
  CorporatesId(CorporatesId: any) {
    this.router.navigate(['/organizationdetails', CorporatesId]);
  }
}
