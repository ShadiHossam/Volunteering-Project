import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  AbstractControl,
} from '@angular/forms';
import { UniversityService } from '../Services/university.service';
import { LoginService } from '../Services/LoginService/login.service';
import { Register } from '../Model/register';
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
  UserName1;
  massage: string;
  errormessage: string;

  constructor(
    public LoginService: LoginService,
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
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      MobileNumber: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      UserName: ['', [Validators.required]],
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
    this.CreateUser(user);
    if (this.UserForm.invalid) {
      return;
    }
  }
  CheckUser(username) {
    this.LoginService.ValidateUser(username).subscribe((x: any) => {
      if (x.Status == 'Invalid') {
        this.errormessage = x.Message;
      } else {
        this.errormessage = null;
      }
    });
  }
  // usernameValidator(errormessage: AbstractControl): { [key: string]: boolean } {
  //   // check a property of c, the Control this validator is attached to
  //   if (errormessage.value === 'user is found please choose another one') {
  //     // if a bad username is detected, return an error
  //     return { 'user is found please choose another one': true };
  //   }
  //   return null;
  // }
  CreateUser(register: Register) {
    this.LoginService.CreateUser(register).subscribe(() => {
      this.data = true;
      this.UserForm.reset();
    });
  }
  // onSubmit(form: NgForm) {
  //   if (form.value.UserID == null) {
  //     this.LoginService.postEmployee(form.value).subscribe((data) => {
  //       this.LoginService.GetUserList();
  //     });
  //   } else {
  //     this.LoginService.putEmployee(form.value.UserID, form.value).subscribe(
  //       (data) => {
  //         this.LoginService.GetUserList();
  //       }
  //     );
  //   }
  // }
}
