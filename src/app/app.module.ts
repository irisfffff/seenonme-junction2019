import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './retailer/header/header.component';
import { SeenonmeComponent } from './seenonme/seenonme.component';
import { BrowseItemsComponent } from './retailer/browse-items/browse-items.component';
import { ItemDetailComponent } from './retailer/item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import { ConsumerComponent } from './seenonme/consumer/consumer.component';
import { ReviewComponent } from './seenonme/review/review.component';
import { OrderHistoryComponent } from './retailer/order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeenonmeComponent,
    BrowseItemsComponent,
    ItemDetailComponent,
    ConsumerComponent,
    ReviewComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
