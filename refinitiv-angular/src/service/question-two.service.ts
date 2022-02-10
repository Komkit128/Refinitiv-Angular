import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionTwoService {

  urlName : string = `https://api.publicapis.org/categories`

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error) }`);
    }
    return throwError(
      'handleError');
  }

  getData(params: any = {} ): Observable<any> {

      const httpOptions = {
        //headers: new HttpHeaders({ 'Content-Type':  'application/json' }),
        params: params
      };
      return this.http.get<any>(this.urlName, httpOptions) .pipe( catchError(this.handleError) )
  }
}
