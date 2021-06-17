import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Website/Services/LoginService/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'src/app/Website/Model/register';
@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css'],
})
export class AdminUserDetailsComponent implements OnInit {
  Id;
  User: Register = <Register>{};
  constructor(
    private LoginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');

    this.LoginService.GetUserById(this.Id).subscribe((x: any) => {
      this.User = <Register>x;
      console.log(this.User);
    });
  }
}
