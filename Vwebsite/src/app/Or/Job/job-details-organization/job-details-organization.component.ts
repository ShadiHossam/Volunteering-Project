import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { JobsService } from '../../../Services/JobsService/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/Model/Jobs';
@Component({
  selector: 'app-job-details-organization',
  templateUrl: './job-details-organization.component.html',
  styleUrls: ['./job-details-organization.component.css'],
})
export class JobDetailsOrganizationComponent implements OnInit {
  Id;
  Job: Jobs = <Jobs>{};

  constructor(
    private JobsService: JobsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // GetJob(id: number) {
  //   this.JobsService.GetJob(id).subscribe((x) => {
  //     x = this.Job;
  //   });
  // }
  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');

    this.JobsService.GetJob(Number(this.Id)).subscribe((x: any) => {
      this.Job = <Jobs>x;
    });
  }
  Edit(Id, changes) {
    console.log(this.Job);
    if (confirm('Are you sure to Edit this record ?') == true) {
      debugger;
      console.log(this.Job.Id);
      this.JobsService.PutJob(Id, changes).subscribe((data: any) => {
        this.Job = <Jobs>data;
      });
    }
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.JobsService.DeleteJob(id).subscribe((x) => {
        this.JobsService.GetJobList().subscribe((data: any) => {
          this.Job = <Jobs>data;
        });
      });
    }
  }
  JobForm() {
    this.router.navigate(['/or-addjobform/' + this.Id]);
  }
}
