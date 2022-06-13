import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustment',
  templateUrl: './ajustment.component.html',
  styleUrls: ['./ajustment.component.scss']
})
export class AjustmentComponent implements OnInit {
    
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

 

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Tresorerie' }, { label: 'Ajustement', active: true }];
   
    //this._fetchData();
  }

}
