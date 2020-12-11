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

@Component({
  selector: 'app-signup-or',
  templateUrl: './signup-or.component.html',
  styleUrls: ['./signup-or.component.css'],
})
export class SignupORComponent implements OnInit {
  country;
  university;
  city;
  cv = false;
  Non = false;
  myControl = new FormControl();
  myControl1 = new FormControl();
  myControl2 = new FormControl();

  filtereduniversity: Observable<string[]>;
  filteredcountry: Observable<string[]>;
  filteredcity: Observable<string[]>;

  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, UniversityService: UniversityService) {
    this.university = UniversityService.getuniversity();

    this.form = fb.group(
      {
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]],
      },
      {}
    );
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }
  ngOnInit(): void {
    this.filtereduniversity = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
    this.filteredcountry = this.myControl1.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter1(value))
    );
    this.filteredcity = this.myControl2.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter2(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.university.filter((university) =>
      university.toLowerCase().includes(filterValue)
    );
  }
  private _filter1(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.country.filter((country) =>
      country.toLowerCase().includes(filterValue)
    );
  }
  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.city.filter((city) => city.toLowerCase().includes(filterValue));
  }
}
