import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
    {
        path: 'add',
        component: AddCustomerComponent
    },
    
    {
        path: 'list',
        component: ListCustomerComponent
    },
    {
        path: 'reservation',
        component: ReservationComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    }
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
