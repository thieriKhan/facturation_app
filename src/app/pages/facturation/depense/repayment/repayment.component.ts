import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repayment',
  templateUrl: './repayment.component.html',
  styleUrls: ['./repayment.component.scss']
})
export class RepaymentComponent implements OnInit {

  constructor() { }
  breadCrumbItems: Array<{}>;


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Depenses' }, { label: 'Reversements', active: true }];
  }

}
