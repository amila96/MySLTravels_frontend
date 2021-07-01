import { Component, OnInit } from '@angular/core';
import { HikkaduwaService } from '../../../service/hikkaduwa.service';
import HikkaduwaReviewDTO from '../../../dto/HikkaduwaReviewDTO';

@Component({
  selector: 'app-hikkaduwa',
  templateUrl: './hikkaduwa.component.html',
  styleUrls: ['./hikkaduwa.component.scss']
})
export class HikkaduwaComponent implements OnInit {

  constructor(private hikkaduwaService: HikkaduwaService) { }
  hikkaduwaReviewList: any[] = [];
  RevName = '';
  Comment = '';

  ngOnInit(): void {
    this.loadAllReviews();
  }

  loadAllReviews() {
    this.hikkaduwaService.getAllReviews().subscribe(response => {
      this.hikkaduwaReviewList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveComment() {
    const dto = new HikkaduwaReviewDTO(
      this.RevName.trim(),
      this.Comment.trim(),
    );

    this.hikkaduwaService.saveReview(dto).subscribe(resp => {
      alert(resp.message);
      this.loadAllReviews();
    }, error => {
      console.log(error);
    });
  }
}
