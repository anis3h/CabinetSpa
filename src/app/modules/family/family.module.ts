import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FamilyComponent } from "./family.component";
import { SharedModule } from "src/app/shared/modules/shared/shared.module";

@NgModule({
  declarations: [FamilyComponent],
  imports: [CommonModule, SharedModule]
})
export class FamilyModule {}
