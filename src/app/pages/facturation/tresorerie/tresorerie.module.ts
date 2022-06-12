import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TresorerieComponent } from './tresorerie.component';
import { ArchwizardModule } from 'angular-archwizard';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbNavModule, NgbTypeaheadModule, NgbPaginationModule, NgbTooltipModule, NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng5SliderModule } from 'ng5-slider';
import { UiModule } from 'src/app/shared/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule,
 
    UiModule,
    ArchwizardModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgSelectModule,
    Ng5SliderModule,
    NgbModalModule
  ],
  declarations: [TresorerieComponent]
})
export class TresorerieModule { }
