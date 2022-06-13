import { ProduitRoutingModule } from './produit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shared/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    NgbAccordionModule,
    NgbNavModule,
    ProduitRoutingModule
  ],
  declarations: [ProduitComponent]
})
export class ProduitModule { }
