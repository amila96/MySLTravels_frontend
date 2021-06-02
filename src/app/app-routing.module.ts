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


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'dashboard', component: DashBoardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'singUp', component: SignUpPageComponent},
  {path: 'destinations', component: DestinationsComponent },
  {path: 'tourPackages', component: TourPackagesComponent },
  {path: 'airportPickup', component: AirportPickupComponent },
  {path: 'aboutUs', component: AboutUsComponent },
  {path: 'contactUs', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
