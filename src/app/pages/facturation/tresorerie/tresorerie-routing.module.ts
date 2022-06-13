import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustmentComponent } from './ajustment/ajustment.component';
import { ListTreasuryComponent } from './list-treasury/list-treasury.component';
import { TransfertComponent } from './transfert/transfert.component';



const routes: Routes = [
    {
        path: 'ajustement',
        component: AjustmentComponent
    },
    {
        path: 'list',
        component: ListTreasuryComponent

    },
    {
        path: 'transfert',
        component: TransfertComponent
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
export class TresorerieRoutingModule { }
