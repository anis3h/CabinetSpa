import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { InformationsService } from "../../shared/services/informations/informations.service";
import { Identifiers } from "@angular/compiler";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { PatientInformation } from 'src/app/shared/models/patient-information';

@Component({
  selector: "app-informations",
  templateUrl: "./informations.component.html",
  styleUrls: ["./informations.component.scss"]
})
export class InformationsComponent implements OnInit {
  public patientInformation: PatientInformation;
  public pregnancyTypeData: string[] = [
    "Aterm",
    "Prématurité",
    "Gemulaire",
    "Triplé"
  ];
  public positionTypeData: string[] = ["Sommet", "Siège"];
  public allaitementData: string[] = [
    "Maternelle",
    "Exclusif",
    "Mixte",
    "Artificiel"
  ];
  public selectedPregnancyType: string;
  public selectedPositionType: string;
  public selectedAllaitement: string;
  selectedAllaitemen: any;

  constructor(
    private informationsService: InformationsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient(): void {
    // The paramMap is a dictionary of route parameter values extracted from the URL.
    const id = +this.route.snapshot.paramMap.get("id");

    this.informationsService.getPatient(id).subscribe(
      async result => {
        this.patientInformation = result;
      },
      error => console.error(error)
    );
  }

  onSubmit() {
    var test = this.patientInformation;
    this.informationsService
      .updatePatient(this.patientInformation)
      .subscribe(() => {
        console.log("patient gespeichert");
        this.goBack();
      });
  }

  goBack(): void {
    // navigates backward one step in the browser's history stack using the Location service
    this.location.back();
  }

  onPregnancyTypeDropDownListChange(e) {
    this.selectedPregnancyType = e.value;
  }

  onPositionTypeDropDownListChange(e) {
    this.selectedPositionType = e.value;
  }

  onAllaitementDropDownListChange(e) {
    this.selectedAllaitemen = e.value;
  }
}
