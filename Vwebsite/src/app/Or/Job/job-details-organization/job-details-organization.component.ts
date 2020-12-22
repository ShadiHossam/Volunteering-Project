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
  selector: 'app-job-details-organization',
  templateUrl: './job-details-organization.component.html',
  styleUrls: ['./job-details-organization.component.css'],
})
export class JobDetailsOrganizationComponent implements OnInit {
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
  Edit(Id, changes) {
    console.log(this.Job);
    if (confirm('Are you sure to Edit this record ?') == true) {
      debugger;
      console.log(this.Job.Id);
      this.JobPostingService.PutJob(Id, changes).subscribe((data: any) => {
        this.Job = <JobPosting>data;
      });
    }
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.JobPostingService.DeleteJob(id).subscribe((x) => {
        this.JobPostingService.GetJobList().subscribe((data: any) => {
          this.Job = <JobPosting>data;
        });
      });
    }
  }
}
