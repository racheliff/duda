import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Review, ReviewStatus} from '../../review';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {
  @Input() review: Review;
  @Output() addEdit: EventEmitter<any> = new EventEmitter();
  @Output() editStatus: EventEmitter<any> = new EventEmitter();
  public ReviewStatus: any;
  constructor() {
    this.ReviewStatus = ReviewStatus;
  }

  ngOnInit() {
  }
  addReview() {
    this.addEdit.emit(this.review);
  }
  editReview() {
    this.editStatus.emit(this.review);
  }
}
