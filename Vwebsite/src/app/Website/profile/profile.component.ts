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
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { LoginService } from '../Services/LoginService/login.service';
import { UserSkillsService } from '../Services/UserSkills/user-skills.service';
import { SkillsService } from '../Services/Skills/skills.service';
import { AreaOfExpertiseService } from '../Services/AreaOfExpertiseService/AreaOfExpertise.service';
import { CityService } from '../Services/CityService/city.service';
import { CountryService } from '../Services/CountryService/country.service';
import { Register } from '../Model/register';
import { Skills } from '../Model/Skills';
import { UserSkills } from '../Model/UserSkills';
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
  UserSkills: any;

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
    public SkillsService: SkillsService,
    public UserSkillsService: UserSkillsService,
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
    this.LoginService.GetUserByUserName(
      localStorage.getItem('UserName')
    ).subscribe((data) => {
      this.UserData = <Register>data;
    });
    this.AreaOfExpertiseService.GetAreaOfExpertiseList().subscribe((res) => {
      this.AreaOfExpertise = res;
    });
    this.CityService.GetCityList().subscribe((res) => {
      this.City = res;
    });
    this.CountryService.GetCountryList().subscribe((res) => {
      this.Country = res;
    });
    this.UserSkillsService.GetUserSkillsList().subscribe((res) => {
      this.UserSkills = res;
    });
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
  LogOut() {
    this.LoginService.LogOut();
    this.router.navigate(['/signin']);
  }
  jobapply() {
    this.router.navigate(['/jobapply']);
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
