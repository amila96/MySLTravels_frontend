import { Component, OnInit } from '@angular/core';
import { EllaReviewService } from '../../../service/ella-review.service';
import EllaReviewDTO from '../../../dto/EllaReviewDTO';

@Component({
  selector: 'app-ella',
  templateUrl: './ella.component.html',
  styleUrls: ['./ella.component.scss']
})
export class EllaComponent implements OnInit {
  ellaReviewList: any[] = [];
  RevName: '';
  Comment: '';

  constructor(private ellaReviewService: EllaReviewService) { }

  ngOnInit(): void {
    this.loadAllReviews();
  }

  loadAllReviews() {
    this.ellaReviewService.getAllReviews().subscribe(response => {
      this.ellaReviewList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveComment() {
    const dto = new EllaReviewDTO(
      this.RevName.trim(),
      this.Comment.trim(),
    );

    this.ellaReviewService.saveReview(dto).subscribe(resp => {
      alert(resp.message);
      this.loadAllReviews();
    }, error => {
      console.log(error);
    });
  }
}
