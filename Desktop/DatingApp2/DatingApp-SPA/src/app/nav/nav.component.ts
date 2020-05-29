import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/Alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    // console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');

    }, error => {
      this.alertify.error(error);
      // console.log("failed to login");
    }, () => {
      this.router.navigate(['/members']);
    });
  }

loggedIn(){
  return this.authService.loggedIn();
}

logout(){
  localStorage.removeItem('token');
  this.alertify.warning('Logged Out!');
  this.router.navigate(['/home']);
}
}
