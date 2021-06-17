import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../Website/Services/JobsService/jobs.service';
import { Router } from '@angular/router';
import { Jobs } from '../../Website/Model/Jobs';

@Component({
  selector: 'app-admin-jobs',
  templateUrl: './admin-jobs.component.html',
  styleUrls: ['./admin-jobs.component.css'],
})
export class AdminJobsComponent implements OnInit {
  Jobs: Jobs[];

  constructor(public JobsService: JobsService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.JobsService.GetJobList()
      .toPromise()
      .then((data) => {
        this.Jobs = data;
      });
    this.Jobs = await this.JobsService.GetJobList().toPromise();
  }
  JobId(jobId: string) {
    this.router.navigate(['/admin-jobdetails', jobId]);
  }
}
