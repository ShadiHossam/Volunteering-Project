import { Component, OnInit } from '@angular/core';
import { JobPostingService } from '../../../Services/job-posting.service';
import { JobPosting } from '../../../JobPosting';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  Job: Object;

  constructor(
    private router: Router,
    private JobPostingService: JobPostingService
  ) {}
  Jobs: JobPosting[];

  ngOnInit(): void {
    this.JobPostingService.GetJobList().subscribe((data) => {
      this.Jobs = data;
    });
  }

  JobId(jobId: string) {
    this.router.navigate(['/jobdetails', jobId]);
  }
}
