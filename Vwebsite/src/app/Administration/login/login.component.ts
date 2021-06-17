import { AdminLoginService } from '../Services/Login/admin.login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  errorMessage: string;
  ErrorMessage: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private AdminLoginService: AdminLoginService
  ) {}

  ngOnInit(): void {}

  Login() {
    this.AdminLoginService.Login(this.model).subscribe(
      (data) => {
        if (data.Status == 'Success') {
          this.router.navigate(['/admin-profile']);
          localStorage.setItem('Admin', this.model.UserName);
        } else {
          this.errorMessage = data.Message;
        }
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}
