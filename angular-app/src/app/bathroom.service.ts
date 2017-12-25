import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Bathroom } from './bathroom'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BathroomService {
  private bathroomsUrl = 'https://secure-lowlands-37343.herokuapp.com/';
  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getNearbyBathrooms(): Observable<Bathroom[]> {
    return this.http.get<Bathroom[]>(this.bathroomsUrl, {lat: 44, lng: -70 });
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  */
  private handleError (operation = 'operation') {
    return (error: any): Observable => {

     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead

     // TODO: better job of transforming error for user consumption
     this.log(`${operation} failed: ${error.message}`);

     // Let the app keep running by returning an empty result.
     return of(result);
    };
  }
}
