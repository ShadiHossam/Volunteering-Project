export class Survey {
  constructor(public Question: Question[]) {}
}

export class Question {
  constructor(
    public Type: string,
    public Text: string,
    public options: Option[],
    public Required: boolean,
    public Remarks: string,
    public hasRemarks: boolean
  ) {}
}

export class Option {
  constructor(
    public OptionText: string,
    public OptionColor: string,
    public hasRemarks: boolean
  ) {}
}
