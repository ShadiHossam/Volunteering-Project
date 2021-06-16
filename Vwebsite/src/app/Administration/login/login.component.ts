import { LoginService } from '../../Administration/Services/Login/login.service';
import { Register } from '../../Website/Model/register';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../Website/Model/LoginModel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  errorMessage: string;
  CorporateModel: any = {};
  ErrorMessage: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private LoginService: LoginService
  ) {}

  ngOnInit(): void {}

  Login() {
    this.LoginService.Login(this.model).subscribe(
      (data) => {
        if (data.Status == 'Success') {
          // this.router.navigate(['/profile']);
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
