import { Component, OnInit } from '@angular/core';
import {Review, ReviewStatus} from '../review';
import * as _ from '@dudadev/random-img';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  newReview: Review;
  reviewsList: Array<Review>;
  editState = false;
  constructor() {
    this.reviewsList = new Array<Review>();
    this.newReview = new Review({name: '', comment: ''});
  }
  ngOnInit() {
  }
  addEditReview(review) {
    if (review.status === ReviewStatus.Edit) { // edited
      review.status = ReviewStatus.Regular;
    } else {  // new
      this.addNewReview();
    }
    this.editState = this.reviewsList.find(x => x.status === ReviewStatus.Edit) !== undefined;
  }
  editStatusReview(review) {
    // reset statuses of all the list
    this.reviewsList.forEach(otherReview => otherReview.status = ReviewStatus.Regular);
    // set the current edited review
    review.status = ReviewStatus.Edit;
    this.editState = true;
  }
  addNewReview() {
    _().then((avatarURL: string) => {
      this.reviewsList.push(
        new Review({name: this.newReview.name, comment: this.newReview.comment, status: ReviewStatus.Regular, sourceImg: avatarURL}));
      this.newReview.clear();
    })
    .catch(e => console.log(e));
  }
}
