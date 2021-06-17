import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Website/Services/LoginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
})
export class AdminProfileComponent implements OnInit {
  constructor(
    public LoginService: LoginService,

    private router: Router
  ) {}

  ngOnInit(): void {}
  LogOut() {
    this.LoginService.LogOut();
    this.router.navigate(['/admin-login']);
  }
  getusers() {
    this.router.navigate(['/admin-users']);
  }
  getcorporates() {
    this.router.navigate(['/admin-corporates']);
  }
  getjobs() {
    this.router.navigate(['/admin-jobs']);
  }
}
