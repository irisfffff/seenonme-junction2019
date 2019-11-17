import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ORDERS } from '../../models/mock-orders';
import { Order } from 'app/models/order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = ORDERS;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSeenOnMe(order_id: string, product_id: string): void {
    this.router.navigate(['/seenonme'], {state: {data: {order_id, product_id}}});
  }

}
