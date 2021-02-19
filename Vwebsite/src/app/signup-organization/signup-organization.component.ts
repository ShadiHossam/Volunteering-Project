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
import { LoginService } from '../Services/LoginService/login.service';
import { CorporatesService } from '../Services/Corporates/corporates.service';
import { Corporates } from '../Model/Corporates';
@Component({
  selector: 'app-signup-organization',
  templateUrl: './signup-organization.component.html',
  styleUrls: ['./signup-organization.component.css'],
})
export class SignupOrganizationComponent implements OnInit {
  constructor(
    public CorporatesService: CorporatesService,
    public LoginService: LoginService,

    private formbulider: FormBuilder
  ) {}
  CorporateForm: FormGroup = new FormGroup({});
  data = false;
  massage: string;
  CorporateUserName;
  CorporateName;
  errormessage: string;
  ErrorMessage: string;

  ngOnInit(): void {
    this.CorporateForm = this.formbulider.group({
      CorporateName: ['', [Validators.required]],
      UserName: ['', [Validators.required]],
      Phonenumber: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.CorporateForm.controls;
  }

  onFormSubmit(corporate) {
    this.CreateCorporate(corporate);
    if (this.CorporateForm.invalid) {
      return;
    }
  }

  CreateCorporate(corporates: Corporates) {
    this.CorporatesService.PostCorporates(corporates).subscribe(() => {
      this.data = true;
      this.CorporateForm.reset();
    });
  }
  CheckCorporateByUserName(CorporateUserName) {
    this.LoginService.ValidCorporateByUserName(CorporateUserName).subscribe(
      (x: any) => {
        if (x.Status == 'Invalid') {
          this.errormessage = x.Message;
        } else {
          this.errormessage = null;
        }
      }
    );
  }
  CheckCorporateByCorporateName(CorporateName) {
    this.LoginService.ValidCorporateByCorporateName(CorporateName).subscribe(
      (y: any) => {
        if (y.Status == 'Invalid') {
          this.ErrorMessage = y.Message;
        } else {
          this.ErrorMessage = null;
        }
      }
    );
  }
}
