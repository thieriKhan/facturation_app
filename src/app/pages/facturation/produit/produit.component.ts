import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})

export class ProduitComponent implements OnInit {

  formData: FormGroup;

  constructor(public formBuilder: FormBuilder) {
  }

  
  // bread crumb items
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Produit' }, { label: 'Produit', active: true }];
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });
    //this._fetchData();
  }

}
