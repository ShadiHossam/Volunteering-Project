import { Register } from 'src/app/Model/register';
import { JobApply } from './../../../Model/JobApply';
import { Component, OnInit } from '@angular/core';
import { JobApplyService } from 'src/app/Services/JobApply/job-apply.service';
import { LoginService } from '../../../Services/LoginService/login.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  x = localStorage.getItem('UserName');
  JobApply: JobApply[];
  User: Register;

  constructor(
    private JobApplyService: JobApplyService,
    private LoginService: LoginService
  ) {}

  async ngOnInit(): Promise<void> {
    this.LoginService.GetUserByUserName(this.x)
      .toPromise()
      .then((y: any) => {
        this.User = y;
      });
    this.User = await this.LoginService.GetUserByUserName(this.x).toPromise();
    this.JobApplyService.GetJobApply(this.User.Id)
      .toPromise()
      .then((x) => {
        this.JobApply = x;
      });
    this.JobApply = await this.JobApplyService.GetJobApply(
      this.User.Id
    ).toPromise();
  }
}
