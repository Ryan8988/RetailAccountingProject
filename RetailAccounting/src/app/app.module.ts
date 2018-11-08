import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import { InventoryComponent } from './inventory/inventory.component';
import {HttpClientModule} from '@angular/common/http';
import {SaleListService} from './sale-list/sale-list.service';
import {DataStotageService} from './shared/data-stotage.service';
import {MatTableModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SaleListComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    FlexLayoutModule
  ],
  providers: [SaleListService, DataStotageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
