import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'rn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authService: AuthService,
              public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login()
      .subscribe(() => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // get the redirect url from authService or else use default
          let redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/crisis-center/admin';
          // Set our navigation extras object
          // that passes on our global query params and fragment
          let navigationExtras: NavigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
          };

          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        }
      });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
