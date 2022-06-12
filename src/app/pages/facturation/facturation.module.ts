import { TresorerieModule } from './tresorerie/tresorerie.module';
import { EtatModule } from './etat/etat.module';
import { ProformaModule } from './proforma/proforma.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DndModule } from 'ngx-drag-drop';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UiModule } from 'src/app/shared/ui/ui.module';

import { UIModule } from '../ui/ui.module';

import { ClientModule } from './client/client.module';
import { DepenseModule } from './depense/depense.module';
import { FactureModule } from './facture/facture.module';
import { ProduitModule } from './produit/produit.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3
};


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientModule,
    DepenseModule,
    ProformaModule,
    DepenseModule,
    EtatModule,
    FactureModule,
    ProduitModule,
    TresorerieModule,
    UiModule,
    UIModule,
    Ng2SearchPipeModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgApexchartsModule,
    PerfectScrollbarModule,
    DndModule,

  ]
})
export class FacturationModule { }
