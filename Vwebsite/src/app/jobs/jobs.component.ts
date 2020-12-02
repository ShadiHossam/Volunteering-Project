import { Component, OnInit } from '@angular/core';
import { JobPostingService } from './../../app/Services/job-posting.service';
import { JobPosting } from '../JobPosting';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  JobForm: FormGroup = new FormGroup({});
  data = false;
  massage: string;

  constructor(
    private JobPostingService: JobPostingService,
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
      Country: ['', [Validators.required]],
      City: ['', [Validators.required]],
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
    this.JobPostingService.CreateJobs(jobposting).subscribe(() => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.JobForm.reset();
    });
  }
}
