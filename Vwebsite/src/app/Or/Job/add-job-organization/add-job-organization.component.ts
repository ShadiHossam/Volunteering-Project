import { City } from './../../../City';
import { Country } from '../../../Country';
import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../Services/jobs.service';
import { AreaOfExpertiseService } from '../../../Services/AreaOfExpertise.service';
import { YearsOfExperienceService } from '../../../Services/years-of-experience.service';
import { CountryService } from '../../../Services/country.service';
import { CityService } from '../../../Services/city.service';
import { Jobs } from '../../../Jobs';
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
  Job: Object;
  City;
  Country;
  YearsOfExperience: any;

  constructor(
    private JobsService: JobsService,
    private router: Router,
    private AreaOfExpertiseService: AreaOfExpertiseService,
    private YearsOfExperienceService: YearsOfExperienceService,
    private cityService: CityService,
    private CountryService: CountryService,
    private formbulider: FormBuilder
  ) {}

  ngOnInit(): void {
    this.JobForm = this.formbulider.group({
      JobTitle: ['', [Validators.required]],
      JobDescription: ['', [Validators.required]],
      DisplaySalary: [, [Validators.required]],
      Salary: [],
      Requirement: ['', [Validators.required]],
      YearsOfExperience: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      City: ['', [Validators.required]],
      AreaOfExpertise: ['', [Validators.required]],
    });
    this.AreaOfExpertiseService.GetJobs().subscribe((res) => {
      this.AreaOfExpertise = res;
    });
    this.YearsOfExperienceService.GetYears().subscribe((res) => {
      this.YearsOfExperience = res;
    });
    this.cityService.Getcity().subscribe((res) => {
      this.City = res;
    });
    this.CountryService.GetCountry().subscribe((res) => {
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
    console.log(Jobs);
    this.JobsService.PostJob(Jobs).subscribe(() => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.JobForm.reset();
      this.router.navigate(['/or-joblist']);
    });
  }
}
