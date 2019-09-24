import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Configuration} from '../../configurations/app.constants';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { PatientService } from 'src/app/shared/services/patient.service';
import { GridComponent, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataManager, WebApiAdaptor, RemoteSaveAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html'
})

export class PatientComponent implements OnInit {
  public patients: any;
  faCoffee = faCoffee;
  public pageSettings: Object;
  public selectOptions: Object;
  public data: DataManager;
  public value: any;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public initialPage: Object;

  constructor(http: HttpClient, public patientService: PatientService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.loadPatients();
    var test = this.patients;
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    // this.data = new DataManager({
    //   json: this.patients,
    //   adaptor: new RemoteSaveAdaptor(),
      // insertUrl: '/Home/Insert',
      // updateUrl: '/Home/Update',
      // removeUrl: '/Home/Delete'
    //  });
   // this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
  }
  // tslint:disable-next-line:member-ordering
   loadPatients() {
    // tslint:disable-next-line:no-shadowed-variable
     this.patientService.GetPatients().subscribe(async result => {
         this.patients = result;
       }, error => console.error(error));
  }
}


