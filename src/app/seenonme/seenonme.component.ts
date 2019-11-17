import { Component, OnInit } from '@angular/core';
import { Upload } from '../models/upload';
import { RestApiService } from 'app/shared/rest-api.service';
import { FormGroup } from '@angular/forms';
import { UploadService } from 'app/shared/upload.service';

@Component({
  selector: 'app-seenonme',
  templateUrl: './seenonme.component.html',
  styleUrls: ['./seenonme.component.scss']
})

export class SeenonmeComponent implements OnInit {
  uploadDetail: Upload = {
    height: null,
    waist: null,
    image: null,
    rating: 0,
    desc: '',
    merchant_id: 'test_merchant_id_3',
    // product_id: 'test_product_id_2',
    order_id: '123455',
    size: 36,
    supplier_id: null
  };

  uploaded: boolean = false;

  constructor(private apiService: RestApiService, private uploadService: UploadService) { }

  ngOnInit() {
    this.uploadDetail.size = this.uploadService.uploadOrder.size;
    this.uploadDetail.merchant_id = this.uploadService.uploadOrder.merchant_id;
    this.uploadDetail.order_id = this.uploadService.uploadOrder.order_id;
    this.uploadDetail.supplier_id = this.uploadService.uploadOrder.supplier_id;
    console.log(this.uploadDetail);
     
  }

  submit(): void {
    if(this.uploadDetail.height == null || this.uploadDetail.waist == null || this.uploadDetail.image == null) {
      return;
    }

    let form = new FormData();
    form.append('merchant_id', this.uploadDetail.merchant_id);
    // form.append('product_id', this.uploadDetail.product_id);
    form.append('height', this.uploadDetail.height.toString());
    form.append('waist', this.uploadDetail.waist.toString());
    form.append('order_id', this.uploadDetail.order_id);
    form.append('size', this.uploadDetail.size.toString());
    form.append('desc', this.uploadDetail.desc);
    form.append('image', this.uploadDetail.image);
    form.append('rating', this.uploadDetail.rating.toString());
    form.append('supplier_id', this.uploadDetail.supplier_id.toString());


    this.apiService.createReview(form).subscribe(response => {
      if(response.data.code === 201) {
        this.uploaded = true;
        this.uploadService.unsetOrderDetail();
      }
    });

    
    // this.uploaded = true;
  }

  genArray(num: number): any[] {
    return Array(num).fill(1);
  }

  setRating(num: number) {
    this.uploadDetail.rating = num;
  }

  onFileChanged(event) {
    this.uploadDetail.image = event.target.files[0];
  }
}
