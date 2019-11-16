import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './retailer/header/header.component';
import { RetailerComponent } from './retailer/retailer.component';
import { SeenonmeComponent } from './seenonme/seenonme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RetailerComponent,
    SeenonmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
