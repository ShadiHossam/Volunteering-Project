import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Website/Services/LoginService/login.service';
import { Router } from '@angular/router';
import { Register } from '../../Website/Model/register';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent implements OnInit {
  Users: Register[];

  constructor(public LoginService: LoginService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.LoginService.GetUserList()
      .toPromise()
      .then((data) => {
        this.Users = data;
      });
    this.Users = await this.LoginService.GetUserList().toPromise();
  }
  UserDetails(id) {
    debugger;
    this.router.navigate(['/admin-usersdetails/' + id]);
  }
}
