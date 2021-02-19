import { map } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
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
import { Jobs } from 'src/app/Model/Jobs';
@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
})
export class JobFormComponent implements OnInit {
  Id: string;
  User;
  JobForm: JobForm[] = [];
  JobApplyForm: FormArray;

  x = localStorage.getItem('UserName');
  orderForm: FormGroup = this.formBuilder.group({
    items: this.formBuilder.array([]),
  });
  items: FormArray;
  UserAnswers: UserAnswers[];
  Job: Jobs = <Jobs>{};

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

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.LoginService.GetUserByUserName(this.x).subscribe((y: any) => {
      this.User = y;
    });

    this.JobsService.GetJob(this.Id).subscribe((x: any) => {
      this.Job = <Jobs>x;
    });

    this.JobFormService.GetJobForm(this.Id).subscribe((x: any) => {
      this.JobForm = <JobForm[]>x;
      this.orderForm = this.formBuilder.group({
        items: this.formBuilder.array([]),
      });
      for (let item of this.JobForm) {
        this.createItem(item);
      }
      console.log(this.orderForm.value);
    });
  }

  createItem(item: JobForm) {
    const qus = this.orderForm.controls.items as FormArray;
    qus.push(
      this.formBuilder.group({
        Id: item.Id,
        JobId: item.JobId,
        Type: item.Type,
        QuestionHeader: item.QuestionHeader,
        QuestionsChoicesViewModelList: [item.QuestionsChoicesViewModelList],
        // Choices: item.QuestionsChoicesViewModelList.Choices,
        UserId: this.User.Id,
        QuestionId: item.Id,
        Answer: '',
      })
    );
  }
  JobId;
  UserId;
  CorporateId;
  JobFormId;
  jobapply;
  UserAnswerId;

  submit() {
    console.log(JSON.stringify(this.orderForm.value));
    // this.UserAnswersService.PostUserAnswers(this.orderForm.value).subscribe(
    //   (x) => {
    //     this.UserAnswers = x;
    //   }
    // );
    this.UserAnswersService.GetUserAnswersList().subscribe((x) => {
      this.UserAnswers = x;
      this.UserAnswers.map((i) =>
        i.Id === this.JobApplyForm.value.UserAnswerId ? i.Id : null
      );
      console.log(this.UserAnswers);
    });
    this.JobApplyForm = this.formBuilder.array([
      (this.JobId = this.Job.Id),
      (this.UserId = this.User.Id),
      (this.CorporateId = this.Job.CorporatesId),
      (this.JobFormId = this.Id),
      this.UserAnswerId,
    ]);
    this.JobApplyService.PostJobApply(this.JobApplyForm).subscribe((x) => {
      this.jobapply = x;
    });
    console.log(this.JobApplyForm.value);
  }
}
