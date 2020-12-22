import { Component, OnInit } from '@angular/core';
import { JobPostingService } from '../../../Services/job-posting.service';
import { JobPosting } from '../../../JobPosting';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list-organization',
  templateUrl: './job-list-organization.component.html',
  styleUrls: ['./job-list-organization.component.css'],
})
export class JobListOrganizationComponent implements OnInit {
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
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.JobPostingService.DeleteJob(id).subscribe((x) => {
        this.JobPostingService.GetJobList().subscribe((data) => {
          this.Jobs = data;
        });
      });
    }
  }

  JobId(jobId: string) {
    this.router.navigate(['/or-jobdetails', jobId]);
  }
}