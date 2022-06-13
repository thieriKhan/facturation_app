import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { latLng, tileLayer } from 'leaflet';
import { customersData } from 'src/app/pages/ecommerce/customers/data';
import { Customers } from 'src/app/pages/ecommerce/customers/customers.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})

export class ProduitComponent implements OnInit {

  formData: FormGroup;
  content:any;
  customersData: Customers[];
validationform: FormGroup;

constructor(private modalService: NgbModal, public formBuilder: FormBuilder) { }

submitted: boolean;
  
  // bread crumb items
  breadCrumbItems: Array<{}>;

  
ngOnInit(): void {
  this.breadCrumbItems = [{ label: 'Produits' }, { label: 'Liste des produits', active: true }];

  this.validationform = this.formBuilder.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    balance: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    date: ['', [Validators.required]],
  });

  this._fetchData();
}

private _fetchData() {
  this.customersData = customersData;
}

/**
 * Returns form
 */
get form() {
  return this.validationform.controls;
}
/**
 * Modal Open
 * @param content modal content
 */
openModal(content: any) {
  this.modalService.open(content, { centered: true });
}

/**
 * save the contacts data
 */
saveData() {
  const name = this.validationform.get('name').value;
  const phone = this.validationform.get('phone').value;
  const balance = this.validationform.get('balance').value;
  const email = this.validationform.get('email').value;
  const date = this.validationform.get('date').value;
  if (this.validationform.valid) {
    this.customersData.push({
      name,
      phone,
      balance,
      email,
      date
    });
    this.validationform = this.formBuilder.group({
      name: '',
      phone: '',
      balance: '',
      email: '',
      date: ''
    });
    this.modalService.dismissAll();
  }
  this.submitted = true;
}


}
