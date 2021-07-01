import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashBoardComponent} from './component/dash-board/dash-board.component';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {SignUpPageComponent} from './component/sign-up-page/sign-up-page.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import { DestinationsComponent } from './component/destinations/destinations.component';
import { AirportPickupComponent } from './component/airport-pickup/airport-pickup.component';
import { TourPackagesComponent } from './component/tour-packages/tour-packages.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AuthGuard } from './guard/auth.guard';
import { EllaComponent} from './component/destinations/ella/ella.component';
import { BentotaComponent } from './component/destinations/bentota/bentota.component';
import { GalleFortComponent } from './component/destinations/galle-fort/galle-fort.component';
import { HikkaduwaComponent } from './component/destinations/hikkaduwa/hikkaduwa.component';
import { HortonPlainsComponent } from './component/destinations/horton-plains/horton-plains.component';
import { KalpitiyaComponent } from './component/destinations/kalpitiya/kalpitiya.component';
import { MirissaComponent } from './component/destinations/mirissa/mirissa.component';
import { NuwaraEliyaComponent } from './component/destinations/nuwara-eliya/nuwara-eliya.component';
import { AirportPickupBookingComponent } from './component/airport-pickup/airport-pickup-booking/airport-pickup-booking.component';
import { AdventureTourComponent } from './component/tour-packages/adventure-tour/adventure-tour.component';
import { AncientTourComponent } from './component/tour-packages/ancient-tour/ancient-tour.component';
import { BeachTourComponent } from './component/tour-packages/beach-tour/beach-tour.component';
import { CultureTourComponent } from './component/tour-packages/culture-tour/culture-tour.component';
import { HikingTourComponent } from './component/tour-packages/hiking-tour/hiking-tour.component';
import { HillCountryTourComponent } from './component/tour-packages/hill-country-tour/hill-country-tour.component';
import { NatureTourComponent } from './component/tour-packages/nature-tour/nature-tour.component';
import { WildlifeTourComponent } from './component/tour-packages/wildlife-tour/wildlife-tour.component';
/*import { NotFoundComponent } from './component/not-found/not-found.component';*/
import { BentotaGerComponent } from './component/destinations/bentota/bentota-ger/bentota-ger.component';
import { BentotaRusComponent } from './component/destinations/bentota/bentota-rus/bentota-rus.component';
import { EllaGerComponent } from './component/destinations/ella/ella-ger/ella-ger.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'dashboard', component: DashBoardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'singUp', component: SignUpPageComponent},
  {path: 'destinations', component: DestinationsComponent },
  {path: 'tourPackages', component: TourPackagesComponent },
  {path: 'airportPickup', component: AirportPickupComponent },
  {path: 'aboutUs', component: AboutUsComponent },
  {path: 'contactUs', component: ContactUsComponent },
  {path: 'destinations/ella', component: EllaComponent},
  {path: 'destinations/bentota', component: BentotaComponent},
  {path: 'destinations/galleFort', component: GalleFortComponent},
  {path: 'destinations/hikkaduwa', component: HikkaduwaComponent},
  {path: 'destinations/hortonPlains', component: HortonPlainsComponent},
  {path: 'destinations/kalpitiya', component: KalpitiyaComponent},
  {path: 'destinations/mirissa', component: MirissaComponent},
  {path: 'destinations/nuwaraEliya', component: NuwaraEliyaComponent},
  {path: 'tourPackages/airportPickupBooking', component: AirportPickupBookingComponent},
  {path: 'tourPackages/adventureTour', component: AdventureTourComponent},
  {path: 'tourPackages/ancientTour', component: AncientTourComponent},
  {path: 'tourPackages/beachTour', component: BeachTourComponent},
  {path: 'tourPackages/cultureTour', component: CultureTourComponent},
  {path: 'tourPackages/hikingTour', component: HikingTourComponent},
  {path: 'tourPackages/hillCountryTour', component: HillCountryTourComponent},
  {path: 'tourPackages/natureTour', component: NatureTourComponent},
  {path: 'tourPackages/wildlifeTour', component: WildlifeTourComponent},
  {path: 'destinations/bentota-ger', component: BentotaGerComponent},
  {path: 'destinations/bentota-rus', component: BentotaRusComponent},
  {path: 'destinations/ella-ger', component: EllaGerComponent},
  /*{path: '**', component: NotFoundComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
