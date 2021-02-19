import { LoginService } from '../Services/LoginService/login.service';
import { Register } from '../Model/register';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../Model/LoginModel';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  model: any = {};
  errorMessage: string;
  CorporateModel: any = {};
  ErrorMessage: string;

  // loginForm: FormGroup;
  // loginmodel: LoginModel = new LoginModel();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private LoginService: LoginService
  ) {}

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }
  // get(key: string): string {
  //   return this.loginForm.controls[key].value;
  // }
  // ErrorMessage;

  Login() {
    this.LoginService.Login(this.model).subscribe(
      (data) => {
        if (data.Status == 'Success') {
          this.router.navigate(['/profile']);
          localStorage.setItem('UserName', this.model.UserName);
          //  sessionStorage.setItem('UserName', this.model.UserName);
        } else {
          this.errorMessage = data.Message;
        }
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );

    // this.loginmodel.UserName = this.get('username');
    // localStorage.setItem('UserName', this.loginmodel.UserName);
    // sessionStorage.setItem('UserName', this.loginmodel.UserName);
    // this.loginmodel.Password = this.get('password');
    // this.LoginService.Login(this.loginmodel).subscribe((response) => {
    //   if (response.ResponseMessage == null) {
    //     console.log(response);
    //     localStorage.setItem('token', response.toString());
    //     sessionStorage.setItem('token', response.toString());
    //     this.router.navigate(['/profile']);
    //   } else {
    //     this.ErrorMessage = response.ResponseMessage;
    //     console.log(this.ErrorMessage);
    //   }
    // });
  }
  CorporateLogin() {
    this.LoginService.CorporateLogin(this.CorporateModel).subscribe(
      (data) => {
        if (data.Status == 'Success') {
          this.router.navigate(['/or-profile']);
          localStorage.setItem('Corporate', this.CorporateModel.UserName);
          //  sessionStorage.setItem('UserName', this.model.UserName);
        } else {
          this.ErrorMessage = data.Message;
        }
      },
      (error) => {
        this.ErrorMessage = error.message;
      }
    );
  }
}
