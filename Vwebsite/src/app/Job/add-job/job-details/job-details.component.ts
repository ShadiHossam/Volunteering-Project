import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { JobPostingService } from '../../../Services/job-posting.service';
import { ActivatedRoute } from '@angular/router';
import { JobPosting } from 'src/app/JobPosting';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  Id;
  Job: JobPosting = <JobPosting>{};

  constructor(
    private JobPostingService: JobPostingService,
    private route: ActivatedRoute
  ) {}

  // GetJob(id: number) {
  //   this.JobPostingService.GetJob(id).subscribe((x) => {
  //     x = this.Job;
  //   });
  // }
  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');

    this.JobPostingService.GetJob(Number(this.Id)).subscribe((x: any) => {
      this.Job = <JobPosting>x;
    });
  }
}
