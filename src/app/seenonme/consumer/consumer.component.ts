import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestApiService } from 'app/shared/rest-api.service';
import { Review } from '../../models/review';
import { REVIEWS } from '../../models/mock-reviews';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {
  @Input() sizes: Array<number>;
  @Input() selectedSize: number;
  @Input() merchantId: string;

  @Output() closeEvent = new EventEmitter();

  displayFeatures: boolean = false;

  height: number;
  waist: number;
  reviews: Review[];

  mockReviews = REVIEWS;

  constructor(private apiService: RestApiService) { }

  ngOnInit() {
    this.getReviews();
  }

  closeSeenOnMe() {
    this.closeEvent.emit('close SeenOnMe');
  }

  toggleFeatures() {
    this.displayFeatures = !this.displayFeatures;
  }

  getReviews() {
    this.apiService.getReviews(this.merchantId, this.height, this.waist, this.selectedSize).subscribe(reviews => 
      {this.reviews = reviews['data'];
    });
  }
}
