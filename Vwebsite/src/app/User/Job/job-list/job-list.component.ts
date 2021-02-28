import { PageEvent } from '@angular/material/paginator';
import { Register } from '../../../Model/register';
import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../Services/JobsService/jobs.service';
import { LoginService } from '../../../Services/LoginService/login.service';
import { Jobs } from '../../../Model/Jobs';
import { Filter } from '../../../Model/Filter';
import { Router } from '@angular/router';
import { AreaOfExpertiseService } from '../../../Services/AreaOfExpertiseService/AreaOfExpertise.service';
import { YearsOfExperienceService } from '../../../Services/YearsOfExperience/years-of-experience.service';
import { CountryService } from '../../../Services/CountryService/country.service';
import { CityService } from '../../../Services/CityService/city.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  Jobs: Jobs[];
  AreaOfExpertise;
  Filter: FormGroup = new FormGroup({});
  City;
  Country;
  YearsOfExperience;
  UserData;
  length: number = 0;
  pageSize = 10;
  pageIndex = 0;
  showFirstLastButtons = true;
  xx = { length: 0, pageIndex: 0, pageSize: 10 };

  constructor(
    private router: Router,
    private JobsService: JobsService,
    private LoginService: LoginService,
    private AreaOfExpertiseService: AreaOfExpertiseService,
    private YearsOfExperienceService: YearsOfExperienceService,
    private cityService: CityService,
    private CountryService: CountryService,
    private formbulider: FormBuilder
  ) {}
  async ngOnInit() {
    this.Filter = this.formbulider.group({
      StartRecord: [''],
      RecordPerpage: [''],
      CountryId: [''],
      CityId: [''],
      AreaOfExpertiseId: [''],
      YearsOFExpertiseId: [''],
      CreationDateSTR: [''],
      FromDate: [''],
      ToDate: [''],

      UserAreaOfExpertise: [''],
    });

    this.LoginService.GetUserByUserName(localStorage.getItem('UserName'))
      .toPromise()
      .then((data) => {
        this.UserData = <Register>data;
      });
    this.UserData = await this.LoginService.GetUserByUserName(
      localStorage.getItem('UserName')
    ).toPromise();
    this.Filter.get('UserAreaOfExpertise').setValue(
      this.UserData.AreaOfExpertiseId
    );
    this.handlePageEvent(this.xx);

    // this.JobsService.Filter(this.Filter.value)
    //   .toPromise()
    //   .then((data) => {
    //     this.Jobs = <Jobs[]>data;
    //   });
    // this.Jobs = await this.JobsService.Filter(this.Filter.value).toPromise();
    this.AreaOfExpertiseService.GetAreaOfExpertiseList().subscribe((res) => {
      this.AreaOfExpertise = res;
    });
    this.YearsOfExperienceService.GetYearsOfExperienceList().subscribe(
      (res) => {
        this.YearsOfExperience = res;
      }
    );
    this.cityService.GetCityList().subscribe((res) => {
      this.City = res;
    });
    this.CountryService.GetCountryList().subscribe((res) => {
      this.Country = res;
    });
  }

  onFormSubmit(x) {
    console.log(this.Filter.value);
    this.JobsService.Filter(x).subscribe((x: any) => {
      this.Jobs = x;
    });
  }

  JobId(jobId: string) {
    this.router.navigate(['/jobdetails', jobId]);
  }
  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.Filter.get('StartRecord').setValue(event.pageSize * event.pageIndex);
    this.Filter.get('RecordPerpage').setValue(
      event.pageSize * event.pageIndex + event.pageSize
    );
    this.JobsService.Filter(this.Filter.value).subscribe((x: any) => {
      this.Jobs = <Jobs[]>x;
      this.length = this.Jobs.length;
    });
  }
}
