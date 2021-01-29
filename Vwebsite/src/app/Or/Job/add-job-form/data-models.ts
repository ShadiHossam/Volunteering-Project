export class Survey {
  constructor(public Question: Question[]) {}
}

export class Question {
  constructor(
    public Type: string,
    public Text: string,
    public Choices: Choices[],
    public Required: boolean
  ) {}
}

export class Choices {
  constructor(public Choices: string) {}
}
