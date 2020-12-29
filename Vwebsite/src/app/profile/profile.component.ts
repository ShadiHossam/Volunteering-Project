import { Component, ViewChild, OnInit } from '@angular/core';
import {
  NgbDateStruct,
  NgbModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { LoginService } from '../Services/login.service';
import { AreaOfExpertiseService } from '../Services/AreaOfExpertise.service';
import { CityService } from '../Services/city.service';
import { CountryService } from '../Services/country.service';
import { Register } from '../Register';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  UserData: Register = <Register>{};
  AreaOfExpertise: any;
  City: any;
  Country: any;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  form: FormGroup = new FormGroup({});

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private http: HttpClient,
    public LoginService: LoginService,
    private AreaOfExpertiseService: AreaOfExpertiseService,
    private CityService: CityService,
    private CountryService: CountryService,
    private router: Router
  ) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.form = fb.group({
      url: ['', [Validators.pattern(reg)]],
    });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing the mouse';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.LoginService.getUsers().subscribe((data) => {
      this.UserData = <Register>data;
    });
    this.AreaOfExpertiseService.GetJobs().subscribe((res) => {
      this.AreaOfExpertise = res;
    });
    this.CityService.Getcity().subscribe((res) => {
      this.City = res;
    });
    this.CountryService.GetCountry().subscribe((res) => {
      this.Country = res;
    });
    // this.LoginService.GetUserList();
  }
  DeleteUsers() {
    this.LoginService.DeleteUsers();
  }
  SaveChanges(changes) {
    if (confirm('Are you sure to save this record ?') == true) {
      this.LoginService.UpdateUser(changes).subscribe((data) => {
        this.UserData = data;
      });
    }
  }
  // showForEdit(emp: Register) {
  //   this.LoginService.SelectedUser = Object.assign({}, emp);
  // }

  // onDelete(id: number) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     this.LoginService.deleteEmployee(id).subscribe((x) => {
  //       this.LoginService.GetUserList();
  //     });
  //   }
  // }
}
