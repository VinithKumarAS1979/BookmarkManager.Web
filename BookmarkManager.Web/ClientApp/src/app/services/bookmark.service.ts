import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BookmarkModel } from '../models/bookmark-model';
import { AppGlobalConstantsService } from './app-global-constants.service';
import { ServiceHelper } from './service-helper';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService extends ServiceHelper {
  private getAllUrl: string = "";

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
}
