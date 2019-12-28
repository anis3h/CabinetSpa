import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Configuration } from "src/app/configurations/app.constants";

@Injectable({
  providedIn: "root"
})
export class InformationsService {
  private informationsServiceUrl;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.informationsServiceUrl = configuration.informationsService;
  }

  getPatient(id: number): Observable<PatientInformation> {
    const url = `${this.informationsServiceUrl}/${id}`;
    return this.http.get<PatientInformation>(url).pipe(
      tap(_ => console.log(`getPatientWithInformation id=${id}`)),
      catchError(
        this.handleError<PatientInformation>(
          `getPatientWithInformation id=${id}`
        )
      )
    );
  }

  updatePatient(patient: PatientInformation): Observable<any> {
    return this.http
      .post(this.informationsServiceUrl + "s", patient, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updatePatient id=${patient.patient.id}`)),
        catchError(this.handleError<any>("updatePatient"))
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
