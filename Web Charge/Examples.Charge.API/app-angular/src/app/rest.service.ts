import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endPoint = 'http://localhost:49159/api/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPersons(): Observable<any> {
    return this.http.get(endPoint + 'person')
      .pipe(
        map(res => this.extractData)
      );
  }

  getPerson(id: number): Observable<any> {
    return this.http.get(endPoint + 'person/' + id)
      .pipe(
        map(res => this.extractData)
      );
  }


  //====== tratamento de erro ===========
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
