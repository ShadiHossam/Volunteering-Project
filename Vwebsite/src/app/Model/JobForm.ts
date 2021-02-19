export interface JobForm {
  Id: number;
  JobId: number;
  QuestionHeader: string;
  Type: string;
  JobName: string;
  QuestionsChoicesViewModelList: QuestionsChoices;
}
export interface QuestionsChoices {
  Choices: string;
  QuestionsId: number;
}
