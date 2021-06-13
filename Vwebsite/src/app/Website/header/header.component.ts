import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/LoginService/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, public LoginService: LoginService) {}
  IsUserLoggedIn = false;
  ngOnInit(): void {
    this.IsUserLoggedIn = this.LoginService.IsUserLoggedIn();
  }
  LogOut() {
    this.LoginService.LogOut();
    this.router.navigate(['/signin']);
  }
  userorcorporate() {
    if (localStorage.getItem('UserName') != null) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/or-profile']);
    }
  }
}
