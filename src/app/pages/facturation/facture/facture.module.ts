import { FactureRoutingModule } from './facture-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from './facture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { FacturationRoutingModule } from '../facturation-routing.modules';
import { AddBillsComponent } from './add-bills/add-bills.component';
import { ListBillsComponent } from './list-bills/list-bills.component';
import { RefundsComponent } from './refunds/refunds.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    NgbAccordionModule,
    NgbNavModule,
    FactureRoutingModule
   
  ],
  declarations: [ AddBillsComponent, ListBillsComponent, RefundsComponent, PaymentsComponent ]
})
export class FactureModule { }
