import { Router } from '@angular/router';
import { LoginService } from './../../../Services/LoginService/login.service';
import { JobApply } from './../../../Model/JobApply';
import { Component, OnInit } from '@angular/core';
import { JobApplyService } from './../../../Services/JobApply/job-apply.service';
import { JobsService } from './../../../Services/JobsService/jobs.service';
import { Register } from 'src/app/Model/register';
import { distinct } from 'rxjs/operators';
import { from } from 'rxjs';

interface person {
  JobDescription;
  JobName;
}
@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css'],
})
export class JobApplyComponent implements OnInit {
  JobApply: JobApply[];
  Jobs;
  User: Register;
  result = [];

  x = localStorage.getItem('UserName');
  Unique;
  constructor(
    private JobApplyService: JobApplyService,
    private JobsService: JobsService,
    private LoginService: LoginService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.LoginService.GetUserByUserName(this.x)
      .toPromise()
      .then((y: any) => {
        this.User = y;
      });
    this.User = await this.LoginService.GetUserByUserName(this.x).toPromise();

    this.JobApplyService.GetJobApply(this.User.Id)
      .toPromise()
      .then((y: any) => {
        this.JobApply = y;
      });
    this.JobApply = await this.JobApplyService.GetJobApply(
      this.User.Id
    ).toPromise();

    // of<JobApply>(this.JobApply)
    // .pipe(distinct((p: JobApply) => p.JobName))
    // .subscribe((x) => console.log(x));

    //   this.JobsService.GetJob(this.JobApply.JobId)
    //     .toPromise()
    //     .then((y: any) => {
    //       this.Jobs = y;
    //     });
    //   this.Jobs = await this.JobsService.GetJob(this.JobApply.JobId).toPromise();
    // }
    new Set(this.JobApply.map((x) => x.JobName)).forEach((jobName) =>
      this.result.push(
        this.JobApply.filter((jobApply) => jobApply.JobName === jobName)[0]
      )
    );
    console.log(this.result);
  }

  JobId(jobId) {
    this.router.navigate(['/jobdetails', jobId]);
  }
}
