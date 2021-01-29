import { JobForm } from './../../../JobForm';
import { UserAnswers } from './../../../UserAnswers';
import { Component, OnInit } from '@angular/core';
import { JobFormService } from '../../../Services/JobForm/job-form.service';
import { LoginService } from '../../../Services/LoginService/login.service';
import { UserAnswersService } from '../../../Services/UserAnswers/user-answers.service';
import { QuestionsChoicesService } from '../../../Services/QuestionsChoices/questions-choices.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
})
export class JobFormComponent implements OnInit {
  Id;
  User;
  JobForm: JobForm[] = [];
  showText = true;
  showChoice = false;
  x = localStorage.getItem('UserName');

  constructor(
    private JobFormService: JobFormService,
    private QuestionsChoicesService: QuestionsChoicesService,
    private UserAnswersService: UserAnswersService,
    private LoginService: LoginService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.LoginService.GetUserByUserName(this.x).subscribe((y: any) => {
      this.User = y;
    });
    this.JobFormService.GetJobForm(this.Id).subscribe((x: any) => {
      this.JobForm = <JobForm[]>x;
      let ItemOfForm = this.orderForm.controls.item as FormArray;
      for (const item of this.JobForm) {
        ItemOfForm.push(
          this.formBuilder.group({
            QuestionId: item.Id,
            UserId: this.User.Id,
          })
        );
      }
      // this.JobForm.forEach((job) => {
      //   if (job.Type == 'TextBox') {
      //     this.showText = true;
      //   } else {
      //     this.showText = false;
      //   }
      // });
    });
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([this.createItem()]),
    });
  }

  orderForm: FormGroup;
  items: FormArray;

  createItem(): FormGroup {
    return this.formBuilder.group({
      UserId: '',
      QuestionId: '',
      Answer: '',
    });
  }

  submit() {
    console.log(this.orderForm.value);
    this.UserAnswersService.PostUserAnswers(this.orderForm.value);
  }
  IsTextBox(job: JobForm) {
    if (job.Type == 'TextBox') {
      return true;
    }
    return false;
  }

  IsChoices(job: JobForm) {
    if (job.Type == 'Choices') {
      return true;
    }
    return false;
  }
  IsMultiChoices(job: JobForm) {
    if (job.Type == 'MultiChoices') {
      return true;
    }
    return false;
  }
}
