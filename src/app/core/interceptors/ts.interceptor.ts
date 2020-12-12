import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services';

@Injectable()
export class TsInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.userToken?.token;

    let clonedRequest;
    if (!req.url.includes('login') && token) {
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: token,
        }
      });
    } else {
      clonedRequest = req;
    }

    return next.handle(clonedRequest)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.error('An error occurred:', err.error.message);
          } else {
            console.error(`Backend returned code ${err.status}, body was: ${err.message}`);
          }

          return throwError('Something bad happened; please try again later.');
        })
      );
  }
}
