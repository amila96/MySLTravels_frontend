import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { SignUpPageComponent } from './component/sign-up-page/sign-up-page.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CookieModule} from 'ngx-cookie';
import { HomePageComponent } from './component/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DestinationsComponent } from './component/destinations/destinations.component';
import { TourPackagesComponent } from './component/tour-packages/tour-packages.component';
import { AirportPickupComponent } from './component/airport-pickup/airport-pickup.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { FooterComponent } from './component/footer/footer.component';
import { EllaComponent } from './component/destinations/ella/ella.component';
import { GalleFortComponent } from './component/destinations/galle-fort/galle-fort.component';
import { HikkaduwaComponent } from './component/destinations/hikkaduwa/hikkaduwa.component';
import { MirissaComponent } from './component/destinations/mirissa/mirissa.component';
import { KalpitiyaComponent } from './component/destinations/kalpitiya/kalpitiya.component';
import { HortonPlainsComponent } from './component/destinations/horton-plains/horton-plains.component';
import { BentotaComponent } from './component/destinations/bentota/bentota.component';
import { NuwaraEliyaComponent } from './component/destinations/nuwara-eliya/nuwara-eliya.component';
import { AirportPickupBookingComponent } from './component/airport-pickup/airport-pickup-booking/airport-pickup-booking.component';
import { AdventureTourComponent } from './component/tour-packages/adventure-tour/adventure-tour.component';
import { CultureTourComponent } from './component/tour-packages/culture-tour/culture-tour.component';
import { BeachTourComponent } from './component/tour-packages/beach-tour/beach-tour.component';
import { NatureTourComponent } from './component/tour-packages/nature-tour/nature-tour.component';
import { HillCountryTourComponent } from './component/tour-packages/hill-country-tour/hill-country-tour.component';
import { AncientTourComponent } from './component/tour-packages/ancient-tour/ancient-tour.component';
import { HikingTourComponent } from './component/tour-packages/hiking-tour/hiking-tour.component';
import { WildlifeTourComponent } from './component/tour-packages/wildlife-tour/wildlife-tour.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MatSelectModule } from '@angular/material/select';
import { MainNavGerComponent } from './component/main-nav/main-nav-ger/main-nav-ger.component';
import { MainNavRusComponent } from './component/main-nav/main-nav-rus/main-nav-rus.component';
import { BentotaGerComponent } from './component/destinations/bentota/bentota-ger/bentota-ger.component';
import { BentotaRusComponent } from './component/destinations/bentota/bentota-rus/bentota-rus.component';
import { EllaGerComponent } from './component/destinations/ella/ella-ger/ella-ger.component';
import { EllaRusComponent } from './component/destinations/ella/ella-rus/ella-rus.component';
import { GalleFortGerComponent } from './component/destinations/galle-fort/galle-fort-ger/galle-fort-ger.component';
import { GalleFortRusComponent } from './component/destinations/galle-fort/galle-fort-rus/galle-fort-rus.component';
import { HikkaduwaGerComponent } from './component/destinations/hikkaduwa/hikkaduwa-ger/hikkaduwa-ger.component';
import { HikkaduwaRusComponent } from './component/destinations/hikkaduwa/hikkaduwa-rus/hikkaduwa-rus.component';
import { HortonPlainsGerComponent } from './component/destinations/horton-plains/horton-plains-ger/horton-plains-ger.component';
import { HortonPlainsRusComponent } from './component/destinations/horton-plains/horton-plains-rus/horton-plains-rus.component';
import { KalpitiyaGerComponent } from './component/destinations/kalpitiya/kalpitiya-ger/kalpitiya-ger.component';
import { KalpitiyaRusComponent } from './component/destinations/kalpitiya/kalpitiya-rus/kalpitiya-rus.component';
import { MirissaGerComponent } from './component/destinations/mirissa/mirissa-ger/mirissa-ger.component';
import { NuwaraEliyaGerComponent } from './component/destinations/nuwara-eliya/nuwara-eliya-ger/nuwara-eliya-ger.component';
import { NuwaraEliyaRusComponent } from './component/destinations/nuwara-eliya/nuwara-eliya-rus/nuwara-eliya-rus.component';
import { MirissaRusComponent } from './component/destinations/mirissa/mirissa-rus/mirissa-rus.component';
import { TourPackageBookingComponent } from './component/tour-packages/tour-package-booking/tour-package-booking.component';
import { WeatherBentotaComponent } from './component/destinations/bentota/weather-bentota/weather-bentota.component';
import { WeatherEllaComponent } from './component/destinations/ella/weather-ella/weather-ella.component';
import { WeatherGalleFortComponent } from './component/destinations/galle-fort/weather-galle-fort/weather-galle-fort.component';
import { WeatherHikkaduwaComponent } from './component/destinations/hikkaduwa/weather-hikkaduwa/weather-hikkaduwa.component';
import { WeatherHortonPlainsComponent } from './component/destinations/horton-plains/weather-horton-plains/weather-horton-plains.component';
import { WeatherKalpitiyaComponent } from './component/destinations/kalpitiya/weather-kalpitiya/weather-kalpitiya.component';
import { WeatherMirissaComponent } from './component/destinations/mirissa/weather-mirissa/weather-mirissa.component';
import { WeatherNuwaraEliyaComponent } from './component/destinations/nuwara-eliya/weather-nuwara-eliya/weather-nuwara-eliya.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    DashBoardComponent,
    HomePageComponent,
    MainNavComponent,
    DestinationsComponent,
    TourPackagesComponent,
    AirportPickupComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    EllaComponent,
    GalleFortComponent,
    HikkaduwaComponent,
    MirissaComponent,
    KalpitiyaComponent,
    HortonPlainsComponent,
    BentotaComponent,
    NuwaraEliyaComponent,
    AirportPickupBookingComponent,
    AdventureTourComponent,
    CultureTourComponent,
    BeachTourComponent,
    NatureTourComponent,
    HillCountryTourComponent,
    AncientTourComponent,
    HikingTourComponent,
    WildlifeTourComponent,
    NotFoundComponent,
    MainNavGerComponent,
    MainNavRusComponent,
    BentotaGerComponent,
    BentotaRusComponent,
    EllaGerComponent,
    EllaRusComponent,
    GalleFortGerComponent,
    GalleFortRusComponent,
    HikkaduwaGerComponent,
    HikkaduwaRusComponent,
    HortonPlainsGerComponent,
    HortonPlainsRusComponent,
    KalpitiyaGerComponent,
    KalpitiyaRusComponent,
    MirissaGerComponent,
    NuwaraEliyaGerComponent,
    NuwaraEliyaRusComponent,
    MirissaRusComponent,
    TourPackageBookingComponent,
    WeatherBentotaComponent,
    WeatherEllaComponent,
    WeatherGalleFortComponent,
    WeatherHikkaduwaComponent,
    WeatherHortonPlainsComponent,
    WeatherKalpitiyaComponent,
    WeatherMirissaComponent,
    WeatherNuwaraEliyaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CookieModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
