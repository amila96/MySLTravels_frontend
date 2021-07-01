import { Component, OnInit } from '@angular/core';
import { HortonPlainsService } from '../../../service/horton-plains.service';
import HortonPlainsReviewDTO from '../../../dto/HortonPlainsReviewDTO';

@Component({
  selector: 'app-horton-plains',
  templateUrl: './horton-plains.component.html',
  styleUrls: ['./horton-plains.component.scss']
})
export class HortonPlainsComponent implements OnInit {

  constructor(private hortonPlainsService: HortonPlainsService) { }
  hortonPlainsReviewList: any[] = [];
  RevName = '';
  Comment = '';

  ngOnInit(): void {
    this.loadAllReviews();
  }

  loadAllReviews() {
    this.hortonPlainsService.getAllReviews().subscribe(response => {
      this.hortonPlainsReviewList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveComment() {
    const dto = new HortonPlainsReviewDTO(
      this.RevName.trim(),
      this.Comment.trim(),
    );

    this.hortonPlainsService.saveReview(dto).subscribe(resp => {
      alert(resp.message);
      this.loadAllReviews();
    }, error => {
      console.log(error);
    });
  }
}
