import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Configuration } from "src/app/configurations/app.constants";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FamilyService {
  private familyServiceUrl;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.familyServiceUrl = configuration.familyService;
  }

  getFamilyPatient(id: number): Observable<FamilyPatient> {
    const url = `${this.familyServiceUrl}/${id}`;
    return this.http.get<FamilyPatient>(url).pipe(
      tap(_ => console.log(`getFamilyPatient id=${id}`)),
      catchError(this.handleError<FamilyPatient>(`getFamilyPatient id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      // Because each service method returns a different kind of Observable result,
      // handleError() takes a type parameter so it can return the safe value as the type that the app expects.
      return of(result as T);
    };
  }
}
