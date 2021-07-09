import { Component, OnInit } from '@angular/core';
import { TourPackageService } from '../../service/tour-package.service';
import TourPackageDTO from "../../dto/TourPackageDTO";

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.scss']
})
export class TourPackagesComponent implements OnInit {

  constructor(private tourPackageService: TourPackageService) { }

  ngOnInit(): void {
    this.loadAllTourPackages();
  }
  tourPackageName = '';
  description = '';
  days = 0;
  hotels = '';
  visitingPlaces = '';
  activities = '';
  schedule = '';

  tourPackageList: any[] = [];

  loadAllTourPackages() {
    this.tourPackageService.getAllTourPackages().subscribe(response => {
      this.tourPackageList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

}
