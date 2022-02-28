import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiConfigModule } from './external-module-config/material-ui-config/material-ui-config.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WinAuthInterceptorService } from './services/win-auth-interceptor.service';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { ApplicationAlertComponent } from './components/application-alert/application-alert.component';

const appRoutes: Routes = [
  { 'path': '', component: BookmarkComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    ApplicationAlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
    , FormsModule
    , ReactiveFormsModule
    , HttpClientModule
    , RouterModule.forRoot(appRoutes)
    , MaterialUiConfigModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WinAuthInterceptorService,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
