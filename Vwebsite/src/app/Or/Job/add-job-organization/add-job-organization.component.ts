import { Countries } from './../../../Countries';
import { Component, OnInit } from '@angular/core';
import { JobPostingService } from '../../../Services/job-posting.service';
import { JobTypesService } from '../../../Services/job-types.service';
import { CountiesService } from '../../../Services/counties.service';
import { CitiesService } from '../../../Services/cities.service';
import { JobPosting } from '../../../JobPosting';
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
  JobTypes;
  Job: Object;
  Cities;
  Countries;

  constructor(
    private JobPostingService: JobPostingService,
    private router: Router,
    private JobTypesService: JobTypesService,
    private CitiesService: CitiesService,
    private CountriesService: CountiesService,
    private formbulider: FormBuilder
  ) {}

  ngOnInit(): void {
    this.JobForm = this.formbulider.group({
      JobTitle: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Duration: ['', [Validators.required]],
      ContactEmail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      Language: ['', [Validators.required]],
      ContactPhoneNumber: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      Location: ['', [Validators.required]],
      CountryId: ['', [Validators.required]],
      CitiesId: ['', [Validators.required]],
      JobTypeId: ['', [Validators.required]],
    });
    this.JobTypesService.GetJobs().subscribe((res) => {
      this.JobTypes = res;
    });
    this.CitiesService.GetCities().subscribe((res) => {
      this.Cities = res;
    });
    this.CountriesService.GetCountries().subscribe((res) => {
      this.Countries = res;
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
  CreateJobs(jobposting: JobPosting) {
    console.log(jobposting);
    debugger;
    this.JobPostingService.PostJob(jobposting).subscribe(() => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.JobForm.reset();
      this.router.navigate(['/or-joblist']);
    });
  }
}
