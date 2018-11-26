import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule, MatTableModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import { InventoryComponent } from './inventory/inventory.component';
import {SaleListService} from './sale-list/sale-list.service';
import {DataStotageService} from './shared/data-stotage.service';
import {firebaseConfig} from '../environments/firebase.config';
import { DeleteComponent } from './dialog/delete/delete.component';
import { EditComponent } from './dialog/edit/edit.component';
import {AddComponent} from './dialog/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SaleListComponent,
    InventoryComponent,
    AddComponent,
    DeleteComponent,
    EditComponent
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
  entryComponents: [AddComponent, EditComponent, DeleteComponent]
})
export class AppModule { }
