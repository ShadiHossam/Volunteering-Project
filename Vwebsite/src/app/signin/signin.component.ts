import { LoginService } from '../Services/LoginService/login.service';
import { Register } from '../Register';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  model: any = {};

  errorMessage: string;
  constructor(private router: Router, private LoginService: LoginService) {}

  ngOnInit() {}
  login() {
    this.LoginService.Login(this.model).subscribe(
      (data) => {
        if (data.Status == 'Success') {
          this.router.navigate(['/profile']);
          localStorage.setItem(this.model.UserName, 'UserName');

          alert(localStorage.getItem('UserName'));

          // this.LoginService.Data(UserData).subscribe(
          //   data
          // )
        } else {
          this.errorMessage = data.Message;
        }
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
    // this.loginmodel.Username = this.get('username');
    // this.loginmodel.Password = this.get('password');
    // this.LoginService.Login(this.loginmodel).subscribe((response) => {
    //   console.log(response);
    //   localStorage.setItem('token', response.toString());
    //   sessionStorage.setItem('token', response.toString());
    // });
  }
}
