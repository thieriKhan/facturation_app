import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bills',
  templateUrl: './list-bills.component.html',
  styleUrls: ['./list-bills.component.scss']
})
export class ListBillsComponent implements OnInit {

  constructor() { }
  breadCrumbItems: Array<{}>;


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Facture' }, { label: 'Liste des factures', active: true }];
  }
}
