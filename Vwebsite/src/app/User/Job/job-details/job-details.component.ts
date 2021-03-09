import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { JobsService } from '../../../Services/JobsService/jobs.service';
import { JobApplyService } from '../../../Services/JobApply/job-apply.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/Model/Jobs';
import { LoginService } from 'src/app/Services/LoginService/login.service';
import { JobApply } from './../../../Model/JobApply';
import { Register } from 'src/app/Model/register';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  Id;
  Job: Jobs = <Jobs>{};
  JobApply: JobApply[];
  User: Register;
  result = [];
  x = localStorage.getItem('UserName');

  constructor(
    private JobsService: JobsService,
    private JobApplyService: JobApplyService,
    private route: ActivatedRoute,
    private router: Router,

    private LoginService: LoginService
  ) {}

  async ngOnInit(): Promise<void> {
    this.Id = this.route.snapshot.paramMap.get('id');

    this.JobsService.GetJob(this.Id).subscribe((x: any) => {
      this.Job = <Jobs>x;
    });
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
        console.log(this.JobApply);
      });
    this.JobApply = await this.JobApplyService.GetJobApply(
      this.User.Id
    ).toPromise();
  }
  showapply() {
    if (
      this.JobApply &&
      this.JobApply.find((x) => x.JobId === Number(this.Id))
    ) {
      return false;
    }
    return true;
  }
  showform() {
    if (
      this.JobApply &&
      this.JobApply.find((x) => x.JobId === Number(this.Id))
    ) {
      return true;
    }
    return false;
  }
  Apply() {
    this.router.navigate(['/jobform', this.Id]);
  }
  formsubmit() {
    this.router.navigate(['/userjobform', this.Id]);
  }
}
