import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-patient-partial",
  templateUrl: "./patient-partial.component.html",
  styleUrls: ["./patient-partial.component.css"]
})

export class PatientPartialComponent implements OnInit {

  @Input() patient: Patient;
  patientTest: Date;
  constructor() {}

  ngOnInit() {
  }
}
