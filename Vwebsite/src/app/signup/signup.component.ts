import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UniversityService } from '../Services/university.service';
import { LoginService } from './../../app/Services/login.service';
import { Register } from '../register';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  university;
  myControl = new FormControl();

  filtereduniversity: Observable<string[]>;
  data = false;
  UserForm: FormGroup = new FormGroup({});

  massage: string;

  constructor(
    private loginService: LoginService,
    private formbulider: FormBuilder,
    service: UniversityService
  ) {
    this.university = service.getuniversity();
  }

  ngOnInit(): void {
    this.filtereduniversity = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
    this.UserForm = this.formbulider.group({
      UserName: ['', [Validators.required]],
      PhoneNumber: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      Email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      Password: ['', [Validators.required]],
    });
  }
  get f() {
    return this.UserForm.controls;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.university.filter((university) =>
      university.toLowerCase().includes(filterValue)
    );
  }
  onFormSubmit(user) {
    this.loginService.ValidateUser(user);
    this.CreateUser(user);
    if (this.UserForm.invalid) {
      return;
    }
  }

  CreateUser(register: Register) {
    this.loginService.CreateUser(register).subscribe(() => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.UserForm.reset();
    });
  }
  x = localStorage.getItem('UserName');
}
