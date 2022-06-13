import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtatComponent } from './etat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { EtatRoutingModule } from './etat-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    NgbAccordionModule,
    NgbNavModule,
    EtatRoutingModule
    
  ],
  declarations: [EtatComponent]
})
export class EtatModule { }
