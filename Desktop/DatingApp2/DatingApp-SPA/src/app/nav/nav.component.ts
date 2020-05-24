import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/Alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(){
    // console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success("Logged in successfully");
      
    }, error => {
      this.alertify.error("Failed to Login");
      // console.log("failed to login");
    })
  }

loggedIn(){
  return this.authService.loggedIn();
}

logout(){
  localStorage.removeItem('token');
  this.alertify.warning('Logged Out!');
}
}
