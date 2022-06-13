import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proforma',
  templateUrl: './proforma.component.html',
  styleUrls: ['./proforma.component.scss']
})
export class ProformaComponent implements OnInit {

  constructor() { }
 
  // bread crumb items
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Proforma' }, { label: 'Proforma', active: true }];
   
    //this._fetchData();
  }


}
