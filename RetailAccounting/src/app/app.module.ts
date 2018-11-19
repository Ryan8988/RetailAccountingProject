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
import {MatInputModule, MatTableModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {firebaseConfig} from '../environments/firebase.config';
import {MatDialogModule} from '@angular/material/dialog';
import { OrderDetailPopupComponent } from './order-detail-popup/order-detail-popup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SaleListComponent,
    InventoryComponent,
    OrderDetailPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatDialogModule, MatInputModule,
    ReactiveFormsModule

  ],
  providers: [SaleListService, DataStotageService],
  bootstrap: [AppComponent],
  entryComponents: [OrderDetailPopupComponent]
})
export class AppModule { }
