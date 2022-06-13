import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bills',
  templateUrl: './add-bills.component.html',
  styleUrls: ['./add-bills.component.scss']
})
export class AddBillsComponent implements OnInit {

  constructor() { }
  breadCrumbItems: Array<{}>;


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Facture' }, { label: 'Ajouter une facture', active: true }];
  } 

}
