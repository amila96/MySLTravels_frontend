import { Component, OnInit } from '@angular/core';
import { GalleFortService } from '../../../service/galle-fort.service';
import GalleFortReviewDTO from '../../../dto/GalleFortReviewDTO';

@Component({
  selector: 'app-galle-fort',
  templateUrl: './galle-fort.component.html',
  styleUrls: ['./galle-fort.component.scss']
})
export class GalleFortComponent implements OnInit {

  constructor(private galleFortService: GalleFortService) { }
  galleFortReviewList: any[] = [];
  RevName = '';
  Comment = '';

  ngOnInit(): void {
    this.loadAllReviews();
  }

  loadAllReviews() {
    this.galleFortService.getAllReviews().subscribe(response => {
      this.galleFortReviewList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveComment() {
    const dto = new GalleFortReviewDTO(
      this.RevName.trim(),
      this.Comment.trim(),
    );

    this.galleFortService.saveReview(dto).subscribe(resp => {
      alert(resp.message);
      this.loadAllReviews();
    }, error => {
      console.log(error);
    });
  }
}
