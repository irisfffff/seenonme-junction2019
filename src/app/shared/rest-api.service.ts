import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Review} from './review';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'https://commerce-259209.appspot.com';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    })
  };

  getReviews(id: string, height?: number, waist?: number, size?: number): Observable<any> {
    let params = {
      merchant_id: id
    }
    if (height) {
      params['height'] = height;
    }
    if (waist) {
      params['waist'] = waist;
    }
    if (size && size != -1) {
      params['size'] = size;
    }
    
    return this.http.get<Review>(this.apiURL + '/reviews', {params})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createReview(review): Observable<any> {
    return this.http.put(this.apiURL + '/upload', review, this.httpOptions)
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
