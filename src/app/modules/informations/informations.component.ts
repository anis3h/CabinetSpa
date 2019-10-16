import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { InformationsService }  from '../../shared/services/informations/informations.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  patient: Patient;

  constructor(
    private informationsService: InformationsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient(): void {
    // The paramMap is a dictionary of route parameter values extracted from the URL.
    const id = +this.route.snapshot.paramMap.get('id');
    this.informationsService.getPatient(id)
      .subscribe(patient => this.patient = patient);
  }
}
