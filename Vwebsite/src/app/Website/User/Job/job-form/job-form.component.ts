import { JobApply } from './../../../Model/JobApply';
import { map, take } from 'rxjs/operators';

import { JobForm } from '../../../Model/JobForm';
import { UserAnswers } from '../../../Model/UserAnswers';
import { Component, OnInit } from '@angular/core';
import { JobFormService } from '../../../Services/JobForm/job-form.service';
import { LoginService } from '../../../Services/LoginService/login.service';
import { UserAnswersService } from '../../../Services/UserAnswers/user-answers.service';
import { QuestionsChoicesService } from '../../../Services/QuestionsChoices/questions-choices.service';
import { JobApplyService } from '../../../Services/JobApply/job-apply.service';
import { JobsService } from '../../../Services/JobsService/jobs.service';

import { ActivatedRoute, Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Jobs } from 'src/app/Website/Model/Jobs';
import { Register } from 'src/app/Website/Model/register';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
})
export class JobFormComponent implements OnInit {
  Id: string;
  User: Register;
  JobForm: JobForm[];
  JobApplyForm: FormArray;

  x = localStorage.getItem('UserName');
  orderForm: FormGroup = this.formBuilder.group({
    items: this.formBuilder.array([]),
  });
  items: FormArray;
  UserAnswers: UserAnswers[];
  Job: Jobs;
  JobApply: JobApply[] = new Array();

  jobapply;
  constructor(
    private JobFormService: JobFormService,
    private QuestionsChoicesService: QuestionsChoicesService,
    private JobApplyService: JobApplyService,

    private UserAnswersService: UserAnswersService,
    private LoginService: LoginService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private JobsService: JobsService,

    private router: Router
  ) {}

  async ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get('id');
    // this.LoginService.GetUserByUserName(this.x).subscribe((y: any) => {
    //   this.User = y;
    // });
    this.LoginService.GetUserByUserName(this.x)
      .toPromise()
      .then((y: any) => {
        this.User = y;
      });
    this.User = await this.LoginService.GetUserByUserName(this.x).toPromise();

    this.JobsService.GetJob(this.Id)
      .toPromise()
      .then((x: any) => {
        this.Job = x;
      });
    this.Job = await this.JobsService.GetJob(this.Id).toPromise();

    this.JobFormService.GetJobForm(this.Id)
      .toPromise()
      .then((x: any) => {
        this.JobForm = <JobForm[]>x;
        this.orderForm = this.formBuilder.group({
          items: this.formBuilder.array([]),
        });
        for (let item of this.JobForm) {
          this.createItem(item);
        }
      });
    this.JobForm = await this.JobFormService.GetJobForm(this.Id).toPromise();
  }

  createItem(item: JobForm) {
    const qus = this.orderForm.controls.items as FormArray;
    qus.push(
      this.formBuilder.group({
        // Id: item.Id,
        JobId: item.JobId,
        Type: item.Type,
        QuestionHeader: item.QuestionHeader,
        QuestionsChoicesViewModelList: [item.QuestionsChoicesViewModelList],
        UserId: this.User.Id,
        QuestionId: item.Id,
        Answer: '',
      })
    );
  }

  async submit() {
    this.UserAnswersService.PostUserAnswers(this.orderForm.value)
      .toPromise()
      .then((x: any) => {
        this.UserAnswers = x;
      });
    this.UserAnswers = await this.UserAnswersService.PostUserAnswers(
      this.orderForm.value
    ).toPromise();

    this.UserAnswers.forEach((x) => {
      this.JobApply.push({
        JobId: this.Id,
        UserId: this.User.Id,
        CorporateId: this.Job.CorporateId,
        JobFormId: x.QuestionId,
        UserAnswerId: x.Id,
      });
    });

    this.JobApplyService.PostJobApply(this.JobApply).subscribe((x) => {
      this.jobapply = x;
    });
    alert('Job Submitted succesfully');
    this.router.navigate(['/profile']);
  }
}
