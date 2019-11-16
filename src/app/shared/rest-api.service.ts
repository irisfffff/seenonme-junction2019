import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Review} from './review';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getReviews(): Observable<any> {
    return this.http.get<Review>(this.apiURL + '/reviews')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createReview(review): Observable<any> {
    return this.http.post<Review>(this.apiURL + '/upload', JSON.stringify(review), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  verifyReview(merchantId): Observable<any> {
    return this.http.get(this.apiURL + '/verify/' + merchantId, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
