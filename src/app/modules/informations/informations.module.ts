import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/modules/shared/shared.module";
import { DropDownListModule } from "@syncfusion/ej2-angular-dropdowns";
import { TextBoxModule } from "@syncfusion/ej2-angular-inputs";
import { CheckBoxModule, ButtonModule } from "@syncfusion/ej2-angular-buttons";

import { InformationsComponent } from "./informations.component";

@NgModule({
  declarations: [InformationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DropDownListModule,
    TextBoxModule,
    CheckBoxModule,
    ButtonModule
  ]
})
export class InformationsModule {}
