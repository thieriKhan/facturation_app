import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor() { }
  breadCrumbItems: Array<{}>;


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Client' }, { label: 'Reservations', active: true }];
  }

}
