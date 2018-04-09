

export enum ReviewStatus {
  New,
  Regular,
  Edit,
  Deleted
}
export class Review {
  status: ReviewStatus;
  name: string;
  comment: string;
  sourceImg: string;
  constructor(spec) {
    this.status = spec.status ? spec.status : ReviewStatus.New;
    this.name = spec.name;
    this.comment = spec.comment;
    this.sourceImg = spec.sourceImg;
  }
  clear() {
    this.name = '';
    this.comment = '';
    this.sourceImg = '';
  }
}
