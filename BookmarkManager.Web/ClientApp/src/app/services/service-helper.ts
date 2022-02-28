import { HttpHeaders } from '@angular/common/http';
import { AppGlobalConstantsService } from './app-global-constants.service';

export abstract class ServiceHelper {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private appConstants: AppGlobalConstantsService, private apiName: string) { }
  getUrl(methodName: string): string {
    return this.appConstants.baseUrl + this.apiName + methodName;
  }
}
