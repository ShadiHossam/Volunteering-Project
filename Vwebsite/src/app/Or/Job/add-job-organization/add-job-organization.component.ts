import { Corporates } from '../../../Model/Corporates';
import { City } from '../../../Model/City';
import { Country } from '../../../Model/Country';
import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../Services/JobsService/jobs.service';
import { CorporatesService } from '../../../Services/Corporates/corporates.service';
import { AreaOfExpertiseService } from '../../../Services/AreaOfExpertiseService/AreaOfExpertise.service';
import { YearsOfExperienceService } from '../../../Services/YearsOfExperience/years-of-experience.service';
import { CountryService } from '../../../Services/CountryService/country.service';
import { CityService } from '../../../Services/CityService/city.service';
import { Jobs } from '../../../Model/Jobs';
import { JobListOrganizationComponent } from '../job-list-organization/job-list-organization.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job-organization',
  templateUrl: './add-job-organization.component.html',
  styleUrls: ['./add-job-organization.component.css'],
})
export class AddJobOrganizationComponent implements OnInit {
  JobForm: FormGroup = new FormGroup({});
  data = false;
  massage: string;
  AreaOfExpertise;
  Corporate: Corporates;
  City;
  Country;
  YearsOfExperience: any;
  x = localStorage.getItem('Corporate');

  constructor(
    private JobsService: JobsService,
    private router: Router,
    private AreaOfExpertiseService: AreaOfExpertiseService,
    private CorporatesService: CorporatesService,
    private YearsOfExperienceService: YearsOfExperienceService,
    private cityService: CityService,
    private CountryService: CountryService,
    private formbulider: FormBuilder
  ) {}

  ngOnInit(): void {
    this.JobForm = this.formbulider.group({
      JobTitle: ['', [Validators.required]],
      JobDescription: ['', [Validators.required]],
      DisplaySalary: [Validators.required],
      Salary: [],
      Requirements: ['', [Validators.required]],
      YearsOfExperience: ['', [Validators.required]],
      CountryId: ['', [Validators.required]],
      CityId: ['', [Validators.required]],
      AreaOfExpertise: ['', [Validators.required]],
      CorporateId: [],
    });
    this.AreaOfExpertiseService.GetAreaOfExpertiseList().subscribe((res) => {
      this.AreaOfExpertise = res;
    });
    this.CorporatesService.GetCorporateByUserName(this.x).subscribe((res) => {
      this.Corporate = res;
      console.log(res);
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
  get f() {
    return this.JobForm.controls;
  }
  onFormSubmit(job) {
    this.CreateJobs(job);
    if (this.JobForm.invalid) {
      return;
    }
  }
  CreateJobs(Jobs: Jobs) {
    this.JobForm.get(' CorporateId').setValue(this.Corporate.Id);
    console.log(Jobs);
    this.JobsService.PostJob(Jobs).subscribe(() => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.JobForm.reset();
      this.router.navigate(['/or-joblist']);
    });
  }
}
