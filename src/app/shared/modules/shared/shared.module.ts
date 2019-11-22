import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TextBoxModule } from "@syncfusion/ej2-angular-inputs";
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { PatientPartialComponent } from "./patient-partial/patient-partial.component";


@NgModule({
  declarations: [PatientPartialComponent],
  imports: [
    CommonModule, 
    TextBoxModule,
    DatePickerModule, 
    FormsModule
  ],
  exports: [PatientPartialComponent]
})
export class SharedModule {}
