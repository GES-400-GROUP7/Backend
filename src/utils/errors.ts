export enum ErrorType {
  ValidationError = "ValidationError",
  FatalError = "FatalError",
  NotFoundError = "NotFoundError",
  DatabaseValidationError = "DatabaseValidationError",
}

export interface IGESError extends Error {
  name: ErrorType;
}

export class ValidationError extends Error implements IGESError {
  public name: ErrorType = ErrorType.ValidationError;
  constructor(message: string) {
    super(message);
  }
}

export class FatalError extends Error implements IGESError {
  public name: ErrorType = ErrorType.ValidationError;
  constructor(message: string) {
    super(message);
  }
}

export class NotFoundError extends Error implements IGESError {
  public name: ErrorType = ErrorType.NotFoundError;
  constructor(message: string) {
    super(message);
  }
}

export class DatabaseValidationError extends Error implements IGESError {
  public name = ErrorType.DatabaseValidationError;
  constructor(message: string) {
    super(message);
  }
}

export function isErrorType(s: string): s is ErrorType {
  return Object.values(ErrorType).includes(s as ErrorType);
}
