import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBillsComponent } from './list-bills/list-bills.component';

import { RefundsComponent } from './refunds/refunds.component';
import { PaymentsComponent } from './payments/payments.component';
import { AddBillsComponent } from './add-bills/add-bills.component';



const routes: Routes = [
    {
        path: 'add',
        component: AddBillsComponent
    },
    {
        path: 'list',
        component: ListBillsComponent

    },
    {
        path: 'payement',
        component: PaymentsComponent
    },
    {
        path: 'remboursement',
        component: RefundsComponent
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
export class FactureRoutingModule { }
