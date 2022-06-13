import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  constructor() { }
  breadCrumbItems: Array<{}>;


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Depenses' }, { label: 'Ajouter une dépense', active: true }];
  }

}
