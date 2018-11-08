import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaleListComponent} from './sale-list/sale-list.component';
import {InventoryComponent} from './inventory/inventory.component';

const routes: Routes = [
  {path: '', component: SaleListComponent},
  {path: 'inventory', component: InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
