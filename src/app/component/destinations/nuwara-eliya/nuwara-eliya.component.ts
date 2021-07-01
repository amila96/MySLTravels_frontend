import { Component, OnInit } from '@angular/core';
import { NuwaraEliyaService } from '../../../service/nuwara-eliya.service';
import NuwaraEliyaReviewDTO from '../../../dto/NuwaraEliyaReviewDTO';

@Component({
  selector: 'app-nuwara-eliya',
  templateUrl: './nuwara-eliya.component.html',
  styleUrls: ['./nuwara-eliya.component.scss']
})
export class NuwaraEliyaComponent implements OnInit {

  constructor(private nuwaraEliyaService: NuwaraEliyaService) { }
  nuwaraEliyaReviewList: any[]=[];
  RevName = '';
  Comment = '';

  ngOnInit(): void {
    this.loadAllReviews();
  }

  loadAllReviews() {
    this.nuwaraEliyaService.getAllReviews().subscribe(response => {
      this.nuwaraEliyaReviewList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveComment() {
    const dto = new NuwaraEliyaReviewDTO(
      this.RevName.trim(),
      this.Comment.trim(),
    );

    this.nuwaraEliyaService.saveReview(dto).subscribe(resp => {
      alert(resp.message);
      this.loadAllReviews();
    }, error => {
      console.log(error);
    });
  }
}
