import { Component, OnInit } from '@angular/core';
import { MirissaService } from '../../../service/mirissa.service';
import MirissaReviewDTO from '../../../dto/MirissaReviewDTO';

@Component({
  selector: 'app-mirissa',
  templateUrl: './mirissa.component.html',
  styleUrls: ['./mirissa.component.scss']
})
export class MirissaComponent implements OnInit {

  constructor(private mirissaService: MirissaService) { }
  mirissaReviewList: any[] = [];
  RevName = '';
  Comment = '';

  ngOnInit(): void {
    this.loadAllReviews();
  }

  loadAllReviews() {
    this.mirissaService.getAllReviews().subscribe(response => {
      this.mirissaReviewList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveComment() {
    const dto = new MirissaReviewDTO(
      this.RevName.trim(),
      this.Comment.trim(),
    );

    this.mirissaService.saveReview(dto).subscribe(resp => {
      alert(resp.message);
      this.loadAllReviews();
    }, error => {
      console.log(error);
    });
  }
}
