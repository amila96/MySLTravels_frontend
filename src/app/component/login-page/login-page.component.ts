import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from '../../service/login-service.service';
import {CookieService} from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router, private loginService: LoginServiceService, private cookieService: CookieService) {
  }

  email = '';
  password = '';

  ngOnInit(): void {
  }

  loginUser() {
    this.loginService.loginUser(this.email, this.password).subscribe(resp => {
      if (resp.message === 'success') {

        const todayDate = new Date();
        const tomorrow = new Date(todayDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const cookieOption = {
          expires: tomorrow
        };
        this.cookieService.put('tokenData', resp.token, cookieOption);
        this.router.navigate(['/dashboard/']).then();

      } else {
        alert(resp.message);
      }

    }, error => {
      console.log(error);
    });
  }

}
