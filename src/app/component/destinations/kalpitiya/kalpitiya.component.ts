import { Component, OnInit } from '@angular/core';
import { KalpitiyaService } from '../../../service/kalpitiya.service';
import KalpitiyaReviewDTO from '../../../dto/KalpitiyaReviewDTO';

@Component({
  selector: 'app-kalpitiya',
  templateUrl: './kalpitiya.component.html',
  styleUrls: ['./kalpitiya.component.scss']
})
export class KalpitiyaComponent implements OnInit {

  constructor(private kalpitiyaService: KalpitiyaService) { }
  kalpitiyaReviewList: any[] = [];
  RevName = '';
  Comment = '';

  ngOnInit(): void {
    this.loadAllReviews();
  }

  loadAllReviews() {
    this.kalpitiyaService.getAllReviews().subscribe(response => {
      this.kalpitiyaReviewList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveComment() {
    const dto = new KalpitiyaReviewDTO(
      this.RevName.trim(),
      this.Comment.trim(),
    );

    this.kalpitiyaService.saveReview(dto).subscribe(resp => {
      alert(resp.message);
      this.loadAllReviews();
    }, error => {
      console.log(error);
    });
  }
}
