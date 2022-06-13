import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ListExpenseComponent } from './list-expense/list-expense.component';
import { RepaymentComponent } from './repayment/repayment.component';



const routes: Routes = [
    {
        path: 'add',
        component: AddExpenseComponent
    },
    {
        path: 'list',
        component: ListExpenseComponent

    },
    {
        path: 'reversement',
        component: RepaymentComponent
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
export class DepenseRoutingModule { }
