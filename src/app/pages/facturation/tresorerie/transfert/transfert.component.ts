import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.scss']
})
export class TransfertComponent implements OnInit {
    // bread crumb items
    breadCrumbItems: Array<{}>;

  constructor() { }

  


  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Tresorerie' }, { label: 'Transfert', active: true }];
  
  }

}
