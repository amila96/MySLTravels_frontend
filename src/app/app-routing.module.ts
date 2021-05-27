import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashBoardComponent} from './component/dash-board/dash-board.component';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {SignUpPageComponent} from './component/sign-up-page/sign-up-page.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'dashboard', component: DashBoardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'singUp', component: SignUpPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
