import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppGlobalConstantsService {
  baseUrl: string = './api/';

  constructor() {
    this.baseUrl = environment.BaseUrl;
  }
}
