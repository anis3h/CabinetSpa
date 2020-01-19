import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FamilyService } from "src/app/shared/services/family/family.service";
import {
  EditSettingsModel,
  ToolbarItems,
  GridComponent
} from "@syncfusion/ej2-angular-grids";
import { Location } from "@angular/common";

@Component({
  selector: "app-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.css"]
})
export class FamilyComponent implements OnInit {
  public pageSettings: Object;
  // tslint:disable-next-line:ban-types
  public selectOptions: Object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[] | Object;
  public initialPage: Object;
  private apiUrl: string = "https://localhost:44393";
  locale: string;
  public familyPatient: FamilyPatient;
  @ViewChild("gridSiblings", { static: false }) public grid: GridComponent;

  constructor(
    private familyService: FamilyService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.getPatient();

    // await this.loadPatients();
    this.initialPage = { pageSize: 12, pageCount: 4 };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: "Dialog"
    };
    this.toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
  }

  getPatient(): void {
    // The paramMap is a dictionary of route parameter values extracted from the URL.
    const id = +this.route.snapshot.paramMap.get("id");

    this.familyService.getFamilyPatient(id).subscribe(
      async result => {
        this.familyPatient = result;
        // if (this.familyPatient.father == null) {
        //   this.familyPatient.father = new Father();
        // }
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
  public registerClick(test: any) {
    this.familyService.updateFamilyPatient(this.familyPatient).subscribe(
      async result => {
        this.familyPatient = result;
      },
      error => console.error(error)
    );

    // update: this.familyPatient.siblings
  }
}
