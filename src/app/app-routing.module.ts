import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PatientComponent } from "./modules/patient/patient.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { ScheduleComponent } from "./modules/schedule/schedule.component";
import { InformationsComponent } from "./modules/informations/informations.component";
import { FamilyComponent } from "./modules/family/family.component";

const routes: Routes = [
  { path: "", redirectTo: "patient", pathMatch: "full" },
  { path: "patient", component: PatientComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "informations/:id", component: InformationsComponent },
  { path: "family/:id", component: FamilyComponent },
  { path: "schedule", component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
