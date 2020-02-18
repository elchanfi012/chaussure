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
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  marqueDispo = ["adidas","nike", "puma"];
  typeDispo = ["sport","ville", "football"];

  constructor(private httpClient: HttpClient) { 
    this.chaussures = [];
  }

  getChaussures(): Observable<Chaussure[]> {
    return this.httpClient.get<Chaussure[]>(this.apiURL).pipe(retry(1),catchError(this.handleError));
  }

  getChaussureById(id: number): Observable<Chaussure> {
    return this.httpClient.get<Chaussure>(this.apiURL + '/' + id).pipe(retry(1),catchError(this.handleError));
  }

  addChaussure(chaussure: Chaussure): Observable<Chaussure> {
    return this.httpClient.post<Chaussure>(this.apiURL , chaussure, this.httpOptions).pipe(catchError(this.handleError));
  }

  editChaussure(chaussure: Chaussure) {
    return this.httpClient.put<Chaussure>(this.apiURL + '/' + chaussure.id , chaussure, this.httpOptions).pipe(
      catchError(this.handleError));
  }

  removeChaussure(chaussure: Chaussure): Observable<Chaussure> {
    return this.httpClient.delete<Chaussure>(this.apiURL + '/' + chaussure.id).pipe(retry(1),catchError(this.handleError));
  }


  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } 
    else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
