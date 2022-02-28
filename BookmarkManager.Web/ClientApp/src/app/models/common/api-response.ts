import { ExceptionInfo } from './exception-info';

export class ApiResponse {
  status: boolean;
  message: string;
  public exceptions: ExceptionInfo[] = [];
  constructor(data: any) {
    if (data != null) {
      this.status = data.status;
      this.message = data.message;
      for (var counter in data.exceptions) {
        this.exceptions.push(new ExceptionInfo(data.exceptions[counter]));
      }
    }
    else {
      this.status = false;
      this.message = "";
    }
  }
}
