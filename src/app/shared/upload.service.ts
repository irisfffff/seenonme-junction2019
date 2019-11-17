import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  uploadOrder = {
    order_id: null,
    merchant_id: null,
    size: null,
    supplier_id: 111
  }

  constructor() { }

  setOrderDetail(order_id, merchant_id, size) {
    this.uploadOrder.order_id = order_id;
    this.uploadOrder.merchant_id = merchant_id;
    this.uploadOrder.size = size;
  }

  unsetOrderDetail() {
    this.uploadOrder.order_id = null;
    this.uploadOrder.merchant_id = null;
    this.uploadOrder.size = null;
  }
}
