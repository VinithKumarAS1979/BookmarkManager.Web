import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BookmarkModel } from '../models/bookmark-model';
import { ApiResponse } from '../models/common/api-response';
import { AppGlobalConstantsService } from './app-global-constants.service';
import { ServiceHelper } from './service-helper';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService extends ServiceHelper {
  private getAllUrl: string = "";
  private createUrl: string = "";
  private updateUrl: string = "";
  private deleteUrl: string = "";

  constructor(private http: HttpClient, private applicationConstants: AppGlobalConstantsService) {
    super(applicationConstants, "Bookmark/")
  }

  public getAll() {
    let url: string = this.getUrl(this.getAllUrl);
    return this.http
      .get<BookmarkModel[]>(url)
      .pipe(map((respData: any[]) => {
        let result: BookmarkModel[] = [];
        respData.forEach(x => {
          result.push(new BookmarkModel(x));
        });
        return result;
      }));
  }

  public create(data: BookmarkModel) {
    return this.http
      .post<ApiResponse>(this.getUrl(this.createUrl), data, { headers: this.headers })
      .pipe(map((respData: ApiResponse) => {
        //  return respData;
        let result: ApiResponse = new ApiResponse(respData);
        return result;
      }));
  }

  public update(data: BookmarkModel) {
    return this.http
      .put<ApiResponse>(this.getUrl(this.updateUrl), data, { headers: this.headers })
      .pipe(map((respData: ApiResponse) => {
        let result: ApiResponse = new ApiResponse(respData);
        return result;
      }));
  }

  public delete(data: BookmarkModel) {
    let deleteUrlToInvoke: string = this.getUrl(this.deleteUrl) + data.id;
    return this.http
      .delete<ApiResponse>(deleteUrlToInvoke, { headers: this.headers })
      .pipe(map((respData: ApiResponse) => {
        let result: ApiResponse = new ApiResponse(respData);
        return result;
      }));
  }

}
