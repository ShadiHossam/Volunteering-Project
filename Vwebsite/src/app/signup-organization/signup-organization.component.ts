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
import { CorporatesService } from '../Services/Corporates/corporates.service';
import { Corporates } from '../Corporates';
@Component({
  selector: 'app-signup-organization',
  templateUrl: './signup-organization.component.html',
  styleUrls: ['./signup-organization.component.css'],
})
export class SignupOrganizationComponent implements OnInit {
  constructor(
    public CorporatesService: CorporatesService,
    private formbulider: FormBuilder
  ) {}
  UserForm: FormGroup = new FormGroup({});
  data = false;
  massage: string;
  errormessage: string;

  ngOnInit(): void {
    this.UserForm = this.formbulider.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.UserForm.controls;
  }

  onFormSubmit(user) {
    this.CreateUser(user);
    if (this.UserForm.invalid) {
      return;
    }
  }
  // CheckUser(username) {
  //   this.CorporatesService.ValidateUser(username).subscribe((x: any) => {
  //     if (x.Status == 'Invalid') {
  //       this.errormessage = x.Message;
  //     } else {
  //       this.errormessage = null;
  //     }
  //   });
  // }
  // usernameValidator(errormessage: AbstractControl): { [key: string]: boolean } {
  //   // check a property of c, the Control this validator is attached to
  //   if (errormessage.value === 'user is found please choose another one') {
  //     // if a bad username is detected, return an error
  //     return { 'user is found please choose another one': true };
  //   }
  //   return null;
  // }
  CreateUser(corporates: Corporates) {
    this.CorporatesService.PostCorporates(corporates).subscribe(() => {
      this.data = true;
      this.UserForm.reset();
    });
  }
}
