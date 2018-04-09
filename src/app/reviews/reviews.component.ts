import { Component, OnInit } from '@angular/core';
import {Review, ReviewStatus} from '../review';

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
  addReview(review) {
    // debugger
    /*const imgGen = require('@dudadev/random-img');
    imgGen().then(avatarURL => {
      this.newReview.clear();
      this.reviewsList.push(
        new Review({name: review.name, comment: review.comment, status: ReviewStatus.Regular, sourceImg: avatarURL}));
    });*/
    this.newReview.clear();
    this.reviewsList.push(
      new Review({name: review.name, comment: review.comment, status: ReviewStatus.Regular, sourceImg: ''}));
  }
  editReview(editState) {
    this.editState = editState;
  }
}
