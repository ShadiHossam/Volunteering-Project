import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../Website/Services/JobsService/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/Website/Model/Jobs';

@Component({
  selector: 'app-admin-job-details',
  templateUrl: './admin-job-details.component.html',
  styleUrls: ['./admin-job-details.component.css'],
})
export class AdminJobDetailsComponent implements OnInit {
  Id;
  Job: Jobs = <Jobs>{};
  constructor(
    private JobsService: JobsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');

    this.JobsService.GetJob(this.Id).subscribe((x: any) => {
      this.Job = <Jobs>x;
    });
  }
}
