import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Survey, Question, Option } from './data-models';
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

  selectedOption = [];

  editMode = false;

  questions: Type[] = [
    { value: 'Single choice', viewValue: 'Single choice' },
    { value: 'Multi choice', viewValue: 'Multi choice' },
    { value: 'Text', viewValue: 'Text' },
    { value: 'Rating', viewValue: 'Rating' },
  ];

  constructor(private JobFormService: JobFormService) {} // private surveyService: SurveyService,

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let surveyQuestions = new FormArray([]);

    this.surveyForm = new FormGroup({
      surveyQuestions: surveyQuestions,
    });

    this.onAddQuestion();
  }

  onAddQuestion() {
    console.log(this.surveyForm);

    const surveyQuestionItem = new FormGroup({
      questionHeader: new FormControl('', Validators.required),
      Type: new FormControl('', Validators.required),
      questionGroup: new FormGroup({}),
    });

    (<FormArray>this.surveyForm.get('surveyQuestions')).push(
      surveyQuestionItem
    );
  }

  onRemoveQuestion(index) {
    this.surveyForm.controls.surveyQuestions['controls'][
      index
    ].controls.questionGroup = new FormGroup({});
    this.surveyForm.controls.surveyQuestions['controls'][
      index
    ].controls.Type = new FormControl({});

    (<FormArray>this.surveyForm.get('surveyQuestions')).removeAt(index);
    this.selectedOption.splice(index, 1);
    console.log(this.surveyForm);
  }

  onSeletType(Type, index) {
    if (Type === 'Single choice' || Type === 'Multi choice') {
      this.addOptionControls(Type, index);
    }
  }

  addOptionControls(Type, index) {
    let options = new FormArray([]);
    let showRemarksBox = new FormControl(false);

    this.surveyForm.controls.surveyQuestions['controls'][
      index
    ].controls.questionGroup.addControl('options', options);
    this.surveyForm.controls.surveyQuestions['controls'][
      index
    ].controls.questionGroup.addControl('showRemarksBox', showRemarksBox);

    this.clearFormArray(
      <FormArray>(
        this.surveyForm.controls.surveyQuestions['controls'][index].controls
          .questionGroup.controls.options
      )
    );

    this.addOption(index);
    this.addOption(index);
  }

  private clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  addOption(index) {
    const optionGroup = new FormGroup({
      optionText: new FormControl('', Validators.required),
    });
    (<FormArray>(
      this.surveyForm.controls.surveyQuestions['controls'][index].controls
        .questionGroup.controls.options
    )).push(optionGroup);
  }

  removeOption(questionIndex, itemIndex) {
    (<FormArray>(
      this.surveyForm.controls.surveyQuestions['controls'][questionIndex]
        .controls.questionGroup.controls.options
    )).removeAt(itemIndex);
  }

  postSurvey() {
    let formData = this.surveyForm.value;
    console.log(formData);
    debugger;

    //  let Question: Question[] = [];
    let Questions = [];

    let surveyQuestions = formData.surveyQuestions;
    //  let optionArray = formData.surveyQuestions.questionGroup.options.optionText;
    let survey = new Survey(Questions);

    surveyQuestions.forEach((question, index, array) => {
      let questionItem = {
        Type: question.Type,
        Text: question.questionHeader,
        options: [],
        Required: false,
        Remarks: '',
        hasRemarks: false,
      };

      if (question.questionGroup.hasOwnProperty('showRemarksBox')) {
        questionItem.hasRemarks = question.questionGroup.showRemarksBox;
      }

      if (question.questionGroup.hasOwnProperty('options')) {
        question.questionGroup.options.forEach((option) => {
          let optionItem: Option = {
            OptionText: option.optionText,
            OptionColor: '',
            hasRemarks: false,
          };
          questionItem.options.push(optionItem);
        });
      }

      survey.Question.push(questionItem);
    });

    console.log('posting survey');
  }

  onSubmit() {
    this.postSurvey();
  }
}
