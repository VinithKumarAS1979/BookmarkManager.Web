export class ExceptionInfo {
  message: string;
  stackTrace: string;
  constructor(data: any) {
    if (data != null) {
      this.message = data.message;
      this.stackTrace = data.stackTrace;
    }
    else {
      this.message = this.stackTrace = "";
    }
  }
}
