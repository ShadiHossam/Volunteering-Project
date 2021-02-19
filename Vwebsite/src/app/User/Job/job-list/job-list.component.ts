import { Register } from '../../../Model/register';
import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../Services/JobsService/jobs.service';
import { LoginService } from '../../../Services/LoginService/login.service';
import { Jobs } from '../../../Model/Jobs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  Job: Register;

  constructor(
    private router: Router,
    private JobsService: JobsService,
    private LoginService: LoginService
  ) {}
  Jobs: Jobs[];

  ngOnInit(): void {
    this.LoginService.GetJobListByUserName().subscribe((data) => {
      this.Job = data;
    });
  }

  JobId(jobId: string) {
    this.router.navigate(['/jobdetails', jobId]);
  }
}
