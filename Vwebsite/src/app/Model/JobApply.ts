export interface JobApply {
  Id?;
  JobId?;
  UserId?: number;
  CorporateId?;
  JobFormId?;
  UserAnswerId?: number;
  JobApplyStatusId?: number;
  JobName?;
  UserName?;
  CorporateName?;
  QuestionHeader?;
  UserAnswerName?;
  JobApplyStatusName?;
  JobDescription?: string;
  UserJobId?;
}
