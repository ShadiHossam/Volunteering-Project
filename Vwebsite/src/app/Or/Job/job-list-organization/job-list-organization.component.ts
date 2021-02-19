import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../Services/JobsService/jobs.service';
import { Jobs } from '../../../Model/Jobs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list-organization',
  templateUrl: './job-list-organization.component.html',
  styleUrls: ['./job-list-organization.component.css'],
})
export class JobListOrganizationComponent implements OnInit {
  constructor(private router: Router, private JobsService: JobsService) {}
  Jobs: Jobs[];

  ngOnInit(): void {
    this.JobsService.GetJobList().subscribe((data) => {
      this.Jobs = data;
    });
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.JobsService.DeleteJob(id).subscribe((x) => {
        this.JobsService.GetJobList().subscribe((data) => {
          this.Jobs = data;
        });
      });
    }
  }

  JobId(jobId: string) {
    this.router.navigate(['/or-jobdetails', jobId]);
  }
}
