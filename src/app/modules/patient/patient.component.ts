import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageService, GridComponent, EditSettingsModel, ToolbarService, EditService , ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor} from '@syncfusion/ej2-data';
//import {TranslateService} from '@ngx-translate/core';

// ToDO Patient Module anlegen
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html'
})

export class PatientComponent implements OnInit {
  public patients: any;
  public pageSettings: Object;
  // tslint:disable-next-line:ban-types
  public selectOptions: Object;
  public data: DataManager;
  public value: any;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public initialPage: Object;
  public dateTest: Date;
  private apiUrl: string = 'https://localhost:44393';
  locale: string;
  @ViewChild('grid', { static: true })
  public grid: GridComponent;
  constructor(http: HttpClient) {

  }
    async ngOnInit() {
   // this.locale = this.translateService.defaultLang;
   // await this.loadPatients();
    this.initialPage = { pageSize: 12, pageCount: 4 };
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog'};
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];

    this.data = new DataManager({
        url: this.apiUrl + '/api/Patient/Patients',
        insertUrl: this.apiUrl + '/api/Patient/Insert',
        removeUrl: this.apiUrl + '/api/Patient/Delete',
        updateUrl: this.apiUrl + '/api/Patient/Update',
        adaptor: new UrlAdaptor });
  }
  //  async loadPatients() {
  //    this.patient2Service.GetPatients().subscribe(async result => {
  //        this.patients = result;
  //      }, error => console.error(error));
  // }
}


