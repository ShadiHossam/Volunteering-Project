import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobForm } from 'src/app/JobForm';
import { Survey, Question, Choices } from './data-models';
import { JobFormService } from '../../../Services/JobForm/job-form.service';
export interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-job-form',
  templateUrl: './add-job-form.component.html',
  styleUrls: ['./add-job-form.component.css'],
})
export class AddJobFormComponent implements OnInit {
  surveyForm: FormGroup;

  selectedChoices = [];

  editMode = false;

  questions: Type[] = [
    { value: 'Single choice', viewValue: 'Single choice' },
    { value: 'Multi choice', viewValue: 'Multi choice' },
    { value: 'Text', viewValue: 'Text' },
    { value: 'Rating', viewValue: 'Rating' },
  ];
  Data: JobForm[];

  constructor(private JobFormService: JobFormService) {} // private surveyService: SurveyService,

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let JobForm = new FormArray([]);

    this.surveyForm = new FormGroup({
      JobForm: JobForm,
    });

    this.onAddQuestion();
  }

  onAddQuestion() {
    console.log(this.surveyForm);

    const surveyQuestionItem = new FormGroup({
      QuestionHeader: new FormControl('', Validators.required),
      Type: new FormControl('', Validators.required),
      QuestionsChoicesViewModelList: new FormGroup({}),
    });

    (<FormArray>this.surveyForm.get('JobForm')).push(surveyQuestionItem);
  }

  onRemoveQuestion(index) {
    this.surveyForm.controls.JobForm['controls'][
      index
    ].controls.QuestionsChoicesViewModelList = new FormGroup({});
    this.surveyForm.controls.JobForm['controls'][
      index
    ].controls.Type = new FormControl({});

    (<FormArray>this.surveyForm.get('JobForm')).removeAt(index);
    this.selectedChoices.splice(index, 1);
    console.log(this.surveyForm);
  }

  onSeletType(Type, index) {
    if (Type === 'Single choice' || Type === 'Multi choice') {
      this.addChoicesControls(Type, index);
    }
  }

  addChoicesControls(Type, index) {
    let Choicess = new FormArray([]);
    let showRemarksBox = new FormControl(false);

    this.surveyForm.controls.JobForm['controls'][
      index
    ].controls.QuestionsChoicesViewModelList.addControl('Choicess', Choicess);
    this.surveyForm.controls.JobForm['controls'][
      index
    ].controls.QuestionsChoicesViewModelList.addControl(
      'showRemarksBox',
      showRemarksBox
    );

    this.clearFormArray(
      <FormArray>(
        this.surveyForm.controls.JobForm['controls'][index].controls
          .QuestionsChoicesViewModelList.controls.Choicess
      )
    );

    this.addChoices(index);
    this.addChoices(index);
  }

  private clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  addChoices(index) {
    const ChoicesGroup = new FormGroup({
      ChoicesText: new FormControl('', Validators.required),
    });
    (<FormArray>(
      this.surveyForm.controls.JobForm['controls'][index].controls
        .QuestionsChoicesViewModelList.controls.Choicess
    )).push(ChoicesGroup);
  }

  removeChoices(questionIndex, itemIndex) {
    (<FormArray>(
      this.surveyForm.controls.JobForm['controls'][questionIndex].controls
        .QuestionsChoicesViewModelList.controls.Choicess
    )).removeAt(itemIndex);
  }

  postSurvey() {
    let formData = this.surveyForm.value;
    console.log(formData);
    this.JobFormService.PostJobForm(formData).subscribe((x) => {
      this.Data = x;
    });
    //  let Question: Question[] = [];
    let Questions = [];

    let JobForm = formData.JobForm;
    //  let ChoicesArray = formData.JobForm.QuestionsChoicesViewModelList.Choicess.ChoicesText;
    let survey = new Survey(Questions);

    JobForm.forEach((question, index, array) => {
      let questionItem = {
        Type: question.Type,
        Text: question.QuestionHeader,
        Choicess: [],
        Required: false,
        Remarks: '',
        hasRemarks: false,
      };

      if (
        question.QuestionsChoicesViewModelList.hasOwnProperty('showRemarksBox')
      ) {
        questionItem.hasRemarks =
          question.QuestionsChoicesViewModelList.showRemarksBox;
      }

      if (question.QuestionsChoicesViewModelList.hasOwnProperty('Choicess')) {
        question.QuestionsChoicesViewModelList.Choicess.forEach((Choices) => {
          let ChoicesItem: Choices = {
            ChoicesText: Choices.ChoicesText,
            ChoicesColor: '',
            hasRemarks: false,
          };
          questionItem.Choicess.push(ChoicesItem);
        });
      }

      survey.Question.push(questionItem);
    });
  }
  QuestionsChoicesViewModelList;
  onSubmit() {
    this.postSurvey();
  }

  // QuestionTypes = ['textbox', 'multichoices'];

  // cc;
  // JobForm: JobForm = <JobForm>{};
  // QuestionsChoicesViewModelList: QuestionsChoicesViewModelList = <QuestionsChoicesViewModelList>{};
  // bb;
  // xx;
  // vvv;
  // JobId;

  // constructor(
  //   private route: ActivatedRoute,
  //   private JobFormService: JobFormService,
  //   private router: Router
  // ) {}
  // ngOnInit() {
  //   this.JobId = this.route.snapshot.paramMap.get('id');
  // }
  // post(x) {
  //   console.log(this.JobId);
  //   this.JobForm.JobId = this.JobId;
  //   this.vvv = this.bb + this.xx;
  //   this.QuestionsChoicesViewModelList.Choices = this.vvv;
  //   debugger;
  //   console.log(this.QuestionsChoicesViewModelList);
  //   this.JobFormService.PostJobForm(this.JobForm).subscribe(
  //     (x) => (this.cc = x)
  //   );
  //   this.router.navigate(['/or-joblist']);
  // }
  // showText = false;
  // showMultiChoices = false;

  // onChange() {
  //   if (this.JobForm.Type == 'textbox') {
  //     this.showText = !this.showText;
  //     this.showMultiChoices = false;
  //   } else {
  //     this.showMultiChoices = !this.showMultiChoices;
  //     this.showText = false;
  //   }
  // }
}
