import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from '../../models/common/api-response';

@Component({
  selector: 'app-application-alert',
  templateUrl: './application-alert.component.html',
  styleUrls: ['./application-alert.component.css']
})
export class ApplicationAlertComponent implements OnInit {
  @Input() alertData: ApiResponse = new ApiResponse(null);
  constructor() { }

  ngOnInit(): void {
  }

  canDisplay(): boolean {
    return this.alertData != null && this.alertData.message != "";
  }

  clearHandler() {
    this.alertData.message = "";
  }
}
