import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WinAuthInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true
    });
    return next.handle(req).pipe(
      finalize(
        () => {
        }
      ),
      catchError(
        (error: any) => {
          return throwError(error);
        }
      )
    );
  }
}
