import { Component, OnInit } from '@angular/core';
import {DataStotageService} from '../shared/data-stotage.service';
import {MatDialog, MatDialogConfig, MatTableDataSource} from '@angular/material';
import {Order} from '../model/order.model';
import { AngularFireDatabase } from '@angular/fire/database';
import {AddComponent} from '../dialog/add/add.component';
import {EditComponent} from '../dialog/edit/edit.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {
  dataSource = new MatTableDataSource<Order>();

  item = 'itemname';
  buyer = 'buyer';
  sell_price = 'sell';
  cost = 'cost';
  profit = 'profit';
  action = 'action';

  columns = [this.item, this.buyer, this.sell_price, this.cost, this.profit, this.action];

  constructor(private datastorage: DataStotageService,
              private db: AngularFireDatabase,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.datastorage.getOrders().subscribe(
      resp => {
        console.log(resp);
        console.log(this.dataSource);
        this.dataSource.data = resp;
      }
    );
  }

  openAddDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.datastorage.storeOrder(result).subscribe(
          resp => {
            if (resp) {
              const data = this.dataSource.data;
              const path = '/orders/' + resp.name;
              this.db.object(path).valueChanges().subscribe(
                item => {
                  data.push(item as Order);
                  console.log(data);
                  this.dataSource.data = data;
                }
              );
            }
          },
          error => {
            console.log('There is error with ' + error.status);
          }
        );
      }
    });
  }

  openEditDialog(index, row): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = row as Order;
    const dialogRef = this.dialog.open(EditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.datastorage.updateOrders(result).subscribe(
          resp => {
            console.log(resp);
          },
          error => {
            console.log('There is error with ' + error.status);
          }
        );
      }
    });
  }

  openDeleteDialog(): void {

  }
}
