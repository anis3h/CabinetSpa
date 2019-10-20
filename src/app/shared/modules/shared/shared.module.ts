import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatientPartialComponent } from "./patient-partial/patient-partial.component";
import { TextBoxModule } from "@syncfusion/ej2-angular-inputs";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PatientPartialComponent],
  imports: [CommonModule, TextBoxModule, FormsModule],
  exports: [PatientPartialComponent]
})
export class SharedModule {}
