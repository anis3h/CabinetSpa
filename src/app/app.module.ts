import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientComponent } from './modules/patient/patient.component';
import { AppRoutingModule } from './app-routing.module';
// Imported Syncfusion button module from buttons package
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule, PageService, ToolbarService, EditService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { InformationsModule } from './modules/informations/informations.module';
import { ScheduleModule } from './modules/schedule/schedule.module';

import { Configuration } from './configurations/app.constants';
import { PatientService } from './shared/services/patient.service';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
//import { Patient2Service } from './shared/services/patient2.service';
//import ngx-translate and the http loader
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
 import localeFr from '@angular/common/locales/fr';
 import localeEn from '@angular/common/locales/en';
 import localeDe from '@angular/common/locales/de';
import { ExtendDatePipe } from './modules/patient/extendedDatePipe';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
<<<<<<< HEAD
    CounterComponent,
    FetchDataComponent,
    PatientComponent,
    ExtendDatePipe
=======
    PatientComponent
>>>>>>> 3ef5f35375d094f1dff5f3b3328bb4efd4ce771e
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    DashboardModule,
    InformationsModule,
    ScheduleModule,
    //Registering EJ2 button module
    ButtonModule,
    GridModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    PageService,
    ToolbarService,
    Configuration,
    PatientService,
    EditService,
    TranslateService,
    SortService, FilterService, GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe, 'de');
    registerLocaleData(localeEn, 'en');
    registerLocaleData(localeFr, 'fr');
  }
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
