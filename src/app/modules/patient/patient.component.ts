import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PageService, GridComponent, EditSettingsModel, ToolbarService, EditService , ToolbarItems, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor} from '@syncfusion/ej2-data';
import {TranslateService} from '@ngx-translate/core';

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
  public toolbar: ToolbarItems[] | Object;
  public initialPage: Object;
  public dateTest: Date;
  private apiUrl: string = 'https://localhost:44393';
  locale: string;
  @ViewChild('grid', { static: true })
  public grid: GridComponent;

<<<<<<< HEAD
  constructor(http: HttpClient, public translateService: TranslateService) {

  }
    async ngOnInit() {
      this.locale = "de";
      this.dateTest  =new Date() ;

=======
  constructor(http: HttpClient, private router: Router,) {

  }
  
  async ngOnInit() {
   // this.locale = this.translateService.defaultLang;
>>>>>>> 3ef5f35375d094f1dff5f3b3328bb4efd4ce771e
   // await this.loadPatients();
    this.initialPage = { pageSize: 12, pageCount: 4 };
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog'};
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', { text: 'Informations', tooltipText: 'Patient Informations', prefixIcon: 'e-expand', id: 'editInformations' }, 'Search'];

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

  rowSelected(args: RowSelectEventArgs) {
    let selectedrowindex: number[] = this.grid.getSelectedRowIndexes();  // Get the selected row indexes.
     // To alert the selected row indexes.
    var selectedrecords: Patient[] = this.grid.getSelectedRecords() as Patient[]; 
    let test = selectedrecords[0];
    //alert(selectedrecords[0] as Patient);

    console.log(selectedrecords[0].id);
    this.router.navigate([`/informations/${4}`]);    
  }
}


