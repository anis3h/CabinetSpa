import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FamilyService } from "src/app/shared/services/family/family.service";

@Component({
  selector: "app-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.css"]
})
export class FamilyComponent implements OnInit {
  public familyPatient: FamilyPatient;

  constructor(
    private familyService: FamilyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPatient();
  }

  getPatient(): void {
    // The paramMap is a dictionary of route parameter values extracted from the URL.
    const id = +this.route.snapshot.paramMap.get("id");

    this.familyService.getFamilyPatient(id).subscribe(
      async result => {
        this.familyPatient = result;
      },
      error => console.error(error)
    );
  }

  //Syncfusion
  //Focus Event function for input component
  public focusIn(target: HTMLElement): void {
    target.parentElement.classList.add("e-input-focus");
  }

  //FocusOut Event function for input component
  public focusOut(target: HTMLElement): void {
    target.parentElement.classList.remove("e-input-focus");
  }

  //Focus Event function for input component
  public focusInLeft(target: HTMLElement): void {
    target.parentElement.parentElement.classList.add("e-input-focus");
  }

  //FocusOut Event function for input component
  public focusOutLeft(target: HTMLElement): void {
    target.parentElement.parentElement.classList.remove("e-input-focus");
  }

  //MouseDown Event function for input component
  public onMouseDown(target: HTMLElement): void {
    target.classList.add("e-input-btn-ripple");
  }

  //MouseUp Event function for input component
  public onMouseUp(target: HTMLElement): void {
    let ele: HTMLElement = target;
    setTimeout(() => {
      ele.classList.remove("e-input-btn-ripple");
    }, 500);
  }
}
