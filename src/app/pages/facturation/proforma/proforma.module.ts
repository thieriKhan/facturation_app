import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProformaComponent } from './proforma.component';
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
  declarations: [ProformaComponent]
})
export class ProformaModule { }
