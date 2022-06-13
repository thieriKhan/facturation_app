import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProformaComponent } from './proforma/proforma.component';



const routes: Routes = [
 
    { path: 'proforma', component: ProformaComponent},
    { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
   
    { path: 'facture', loadChildren: () => import('./facture/facture.module').then(m => m.FactureModule) },
    { path: 'depense', loadChildren: () => import('./depense/depense.module').then(m => m.DepenseModule) },
    { path: 'produit', loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule) },
    { path: 'tresorerie', loadChildren: () => import('./tresorerie/tresorerie.module').then(m => m.TresorerieModule) },
    { path: 'etat', loadChildren: () => import('./etat/etat.module').then(m => m.EtatModule) },

    
    

]       
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacturationRoutingModule { }
