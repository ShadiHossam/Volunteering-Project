export class Survey {
  constructor(public Question: Question[]) {}
}

export class Question {
  constructor(
    public Type: string,
    public Text: string,
    public Choicess: Choices[],
    public Required: boolean,
    public Remarks: string,
    public hasRemarks: boolean
  ) {}
}

export class Choices {
  constructor(
    public ChoicesText: string,
    public ChoicesColor: string,
    public hasRemarks: boolean
  ) {}
}
