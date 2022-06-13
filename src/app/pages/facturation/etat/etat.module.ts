import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtatComponent } from './etat.component';
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
    
  ],
  declarations: [EtatComponent]
})
export class EtatModule { }
