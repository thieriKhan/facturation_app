import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-treasury',
  templateUrl: './list-treasury.component.html',
  styleUrls: ['./list-treasury.component.scss']
})
export class ListTreasuryComponent implements OnInit {
   // bread crumb items
   breadCrumbItems: Array<{}>;
   
  constructor() { }

  
 

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Produit' }, { label: 'Produit', active: true }];
  
    //this._fetchData();
  }

}
