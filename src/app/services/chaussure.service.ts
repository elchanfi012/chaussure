import { Injectable } from '@angular/core';
import { Chaussure } from '../models/chaussure';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ChaussureService {
  chaussures: Chaussure[];
  apiURL = 'http://localhost:3000/chaussures';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { 
    this.chaussures = [];
  }

  getChaussures(): Observable<Chaussure[]> {
    return this.httpClient.get<Chaussure[]>(this.apiURL)
    .pipe(
    retry(1),
    catchError(this.handleError)
    );
  }


  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
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
