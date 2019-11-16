import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeenonmeComponent } from './seenonme/seenonme.component';
import { BrowseItemsComponent } from './retailer/browse-items/browse-items.component';
import { OrderHistoryComponent } from './retailer/order-history/order-history.component';


const routes: Routes = [
  { path: 'retailer', component: BrowseItemsComponent},
  { path: 'account', component: OrderHistoryComponent},
  { path: 'seenonme', component: SeenonmeComponent},
  { path: '**', redirectTo: '/retailer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
