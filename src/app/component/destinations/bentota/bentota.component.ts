import { Component, OnInit } from '@angular/core';
import { BentotaReviewService } from '../../../service/bentota-review.service';
import BentotaReviewDTO from '../../../dto/BentotaReviewDTO';

@Component({
  selector: 'app-bentota',
  templateUrl: './bentota.component.html',
  styleUrls: ['./bentota.component.scss']
})
export class BentotaComponent implements OnInit {

  constructor(private bentotaReviewService: BentotaReviewService) { }

  RevName = '';
  Comment = '';
  bentotaReviewList: any[] = [];

  ngOnInit(): void {
    this.loadAllReviews();
  }

  loadAllReviews() {
    this.bentotaReviewService.getAllReviews().subscribe(response => {
      this.bentotaReviewList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveComment() {
    const dto = new BentotaReviewDTO(
      this.RevName.trim(),
      this.Comment.trim(),
    );

    this.bentotaReviewService.saveReview(dto).subscribe(resp => {
      alert(resp.message);
      this.loadAllReviews();
    }, error => {
      console.log(error);
    });
  }
}
