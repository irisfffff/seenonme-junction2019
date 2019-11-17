import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ORDERS } from '../../models/mock-orders';
import { Order } from 'app/models/order';
import { UploadService } from 'app/shared/upload.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = ORDERS;
  orderItem = {
    product_id: null,
    size: null
  };

  constructor(private router: Router, private uploadService: UploadService) { }

  ngOnInit() {
  }

  goToSeenOnMe(order_id: string): void {
    if(this.orderItem.product_id === null || this.orderItem.size === null) {
      return;
    }
    
    this.uploadService.setOrderDetail(order_id, this.orderItem.product_id, this.orderItem.size)
    this.router.navigate(['/seenonme']);
  }

  selectItem(product_id: string, size: number) {
    this.orderItem.product_id = product_id;
    this.orderItem.size = size;
  }

}
