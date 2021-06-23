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
    WildlifeTourComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
