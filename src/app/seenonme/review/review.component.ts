import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'app/models/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review;

  constructor() { }

  ngOnInit() {
  }

  genArray(num: number): any[] {
    return Array(num).fill(1);
  }

}
