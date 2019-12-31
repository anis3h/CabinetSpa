import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FamilyComponent } from "./family.component";
import { SharedModule } from "src/app/shared/modules/shared/shared.module";
import { TextBoxModule } from "@syncfusion/ej2-angular-inputs";
import { CheckBoxModule, ButtonModule } from "@syncfusion/ej2-angular-buttons";
import { FormsModule } from "@angular/forms";
import { from } from "rxjs";
import {
  PageService,
  GridModule,
  EditSettingsModel,
  ToolbarService,
  EditService,
  ToolbarItems,
  RowSelectEventArgs
} from "@syncfusion/ej2-angular-grids";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

@NgModule({
  declarations: [FamilyComponent],
  imports: [
    CommonModule,
    SharedModule,
    TextBoxModule,
    CheckBoxModule,
    ButtonModule,
    FormsModule,
    GridModule
  ]
})
export class FamilyModule {}
