import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepenseComponent } from './depense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { DepenseRoutingModule } from './depense-routing.module';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ListExpenseComponent } from './list-expense/list-expense.component';
import { RepaymentComponent } from './repayment/repayment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    NgbAccordionModule,
    NgbNavModule,
    DepenseRoutingModule
  ],
  declarations: [AddExpenseComponent, ListExpenseComponent, RepaymentComponent]
})
export class DepenseModule { }
