import {Injectable} from '@angular/core';
import {Order} from '../model/order.model';

@Injectable()
export class SaleListService {
  private order: Order[] = [];

  getOrders() {
    return this.order.slice();
  }

  storeOrders() {

  }
}
