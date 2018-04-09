import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Review, ReviewStatus} from '../../review';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {
  @Input() review: Review;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  public ReviewStatus: any;
  constructor() {
    this.ReviewStatus = ReviewStatus;
  }

  ngOnInit() {
  }
  addReview(name, comment) {
    this.add.emit({name, comment});
  }
  editReview(review, status) {
    debugger
    review.status = status;
    this.edit.emit(review.status === ReviewStatus.Edit);
  }
}
