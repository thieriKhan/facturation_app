import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';

const routes: Routes = [
    {
        path: 'add',
        component: AddCustomerComponent
    },
    {
        path: '',
        component: ListCustomerComponent
    }
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
