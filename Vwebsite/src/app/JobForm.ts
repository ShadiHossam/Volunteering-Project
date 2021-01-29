export interface JobForm {
  Id: number;
  JobId: number;
  QuestionHeader: string;
  Type: string;
  JobName: string;
  QuestionsChoicesViewModelList: QuestionsChoices[];
}
export interface QuestionsChoices {
  QuestionsName: string;
  Choices: string;
  QuestionsId: number;
}
