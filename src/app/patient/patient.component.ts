import { Component, OnInit, Inject } from '@angular/core';
import { data } from './datasource';
import { HttpClient } from '@angular/common/http';
import {Configuration} from '../configurations/app.constants';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html'
})


export class PatientComponent {
  public patients: Patient[];
  faCoffee = faCoffee;
  //ngOnInit(): void {
  //  this.data = data;
  //}
  constructor(http: HttpClient, private configuration: Configuration) {
    http.get<Patient[]>(configuration.patientServer).subscribe(result => {
      this.patients = result;
    }, error => console.error(error));
  }
}


//export class FetchDataComponent {
//  public patients: Patient[];

//  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//    http.get<Patient[]>(baseUrl + 'api/Patient/Patients').subscribe(result => {
//      this.patients = result;
//    }, error => console.error(error));
//  }
//}

interface Patient {
  name: string;
  firstName: string;
  tel: string;
  adresse: string;
}
