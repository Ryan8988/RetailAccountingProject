import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SaleListService} from '../sale-list/sale-list.service';
import {Observable} from 'rxjs';
import {Order} from '../model/order.model';
import {map} from 'rxjs/operators';

@Injectable()
export class DataStotageService {
  constructor(private http: HttpClient, private salelistservice: SaleListService) {}

  storeOrder(order: Order): Observable<any> {
    return this.http.post<any>('https://retail-accounting-project.firebaseio.com/orders/user.json', order).pipe(map(
      resp => {
        console.log(resp);
        return resp;
      }));
  }
  getOrders(): Observable<Order []> {
    const ordersURl = 'https://retail-accounting-project.firebaseio.com/orders.json';
    return this.http.get<any[]>(ordersURl).pipe(map(
      resp => {
        const orders = [];
        if (resp) {
          for (const item in resp) {
            if (item) {
              orders.push(resp[item]);
            }
          }
        }
        return orders;
      }));
  }

  updateOrders(order: Order): Observable<any> {
    return this.http.patch<any>('https://retail-accounting-project.firebaseio.com/orders.json', order).pipe(map(
      resp => {
        console.log(resp);
        return resp;
      }));
  }
}

