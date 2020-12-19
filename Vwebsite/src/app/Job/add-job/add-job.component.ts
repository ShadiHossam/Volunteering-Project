import { Component, OnInit } from '@angular/core';
import { JobPostingService } from '../../Services/job-posting.service';
import { JobTypesService } from '../../Services/job-types.service';
import { JobPosting } from '../../JobPosting';
import { JobListComponent } from '../add-job/job-list/job-list.component';
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
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
})
export class AddJobComponent implements OnInit {
  JobForm: FormGroup = new FormGroup({});
  data = false;
  massage: string;
  JobTypes;
  Job: Object;

  constructor(
    private JobPostingService: JobPostingService,
    private router: Router,
    private JobTypesService: JobTypesService,
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
    this.JobTypesService.GetJobs().subscribe((res) => {
      this.JobTypes = res;
    });
  }
  get f() {
    return this.JobForm.controls;
  }
  onFormSubmit(job) {
    debugger;
    this.CreateJobs(job);
    if (this.JobForm.invalid) {
      return;
    }
  }
  CreateJobs(jobposting: JobPosting) {
    debugger;
    this.JobPostingService.PostJob(jobposting).subscribe(() => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.JobForm.reset();
    });
  }
}
