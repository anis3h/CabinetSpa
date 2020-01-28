import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {
  public server = "https://localhost:44393";
  public apiUrl = "/api/v1";
  public serverWithApiUrl = this.server + this.apiUrl;
  public patientServer = this.server + this.apiUrl + "/Patient/Patients";

  //public informationsUrl = 'https://localhost:44372';
  public informationsService =
    this.server + this.apiUrl + "/Informations/Information";

  public familyService = this.server + this.apiUrl + "/family/family";
}
