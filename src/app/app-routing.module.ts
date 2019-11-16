import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailerComponent } from './retailer/retailer.component';
import { SeenonmeComponent } from './seenonme/seenonme.component';


const routes: Routes = [
  { path: 'retailer', component: RetailerComponent},
  { path: 'seenonme', component: SeenonmeComponent},
  { path: '**', component:  RetailerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
