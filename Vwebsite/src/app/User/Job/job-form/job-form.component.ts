import { Type } from './../../../Or/Job/add-job-form/add-job-form.component';
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
  // lets take a strict aproach
  Id: string;
  User; // this is why it is undefined it is an object
  JobForm: JobForm[] = [];
  showText = true;
  showChoice = false;
  x = localStorage.getItem('UserName');
  orderForm: FormGroup = this.formBuilder.group({
    items: this.formBuilder.array([]),
  });
  // we are not using items since it is inside the forderForm definition
  items: FormArray;

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

    this.JobFormService.GetJobForm(+this.Id).subscribe((x: any) => {
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
  createItem(item) {
    const qus = this.orderForm.controls.items as FormArray;
    qus.push(
      this.formBuilder.group({
        Id: item.Id,
        JobId: item.JobId,
        Type: item.Type,
        QuestionHeader: item.QuestionHeader,
        QuestionsChoicesViewModelList: item.QuestionsChoicesViewModelList,
        UserId: this.User.Id,
        QuestionId: item.Id,
        Answer: '',
      })
    );
  }

  submit() {
    console.log(this.orderForm.value);
    this.UserAnswersService.PostUserAnswers(this.orderForm.value);
  }
  IsTextBox() {
    debugger;

    console.log(this.orderForm.value.items);

    if (this.orderForm.value.items == 'TextBox') {
      return true;
    }
    return false;
  }

  IsChoices(job) {
    if (job.type == 'Choices') {
      return true;
    }
    return false;
  }
  IsMultiChoices(job) {
    if (job.Type == 'MultiChoices') {
      return true;
    }
    return false;
  }
}
