import { Component, OnInit } from '@angular/core';
import { NuwaraEliyaService } from '../../../service/nuwara-eliya.service';
import NuwaraEliyaReviewDTO from '../../../dto/NuwaraEliyaReviewDTO';

@Component({
  selector: 'app-nuwara-eliya',
  templateUrl: './nuwara-eliya.component.html',
  styleUrls: ['./nuwara-eliya.component.scss']
})
export class NuwaraEliyaComponent implements OnInit {

  WeatherData:any;
  constructor(private nuwaraEliyaService: NuwaraEliyaService) { }
  nuwaraEliyaReviewList: any[]=[];
  RevName = '';
  Comment = '';

  ngOnInit(): void {
    this.loadAllReviews();
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
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
  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=nuwara eliya&appid=45bb9d8e621fc62f44560e9699f42aee')
      .then(response=>response.json())
      .then(data=>{this.setWeatherData(data);})

    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min_cel = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max_cel = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
