import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

    public server = 'https://localhost:44393';
    public apiUrl = '/api';
    public serverWithApiUrl = this.server + this.apiUrl;
    public patientServer = this.server + this.apiUrl + '/Patient/Patients';

    public informationsUrl = 'https://localhost:44372';
    public informationsService = this.informationsUrl + this.apiUrl + '/Informations';
}