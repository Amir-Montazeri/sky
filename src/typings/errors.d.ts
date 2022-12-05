interface CustomError {
  code: number;
  message: string;
}

type Errors = ArrayOneOrMore<CustomError>;
