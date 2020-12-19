import { LoginService } from './Services/login.service';

import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, debounceTime, take, switchMap } from 'rxjs/operators';

function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value === null || value.length === 0;
}

@Injectable({
  providedIn: 'root',
})
export class UserName {
  constructor(private LoginService: LoginService) {}

  existingEmailValidator(initialEmail: string = ''): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      if (isEmptyInputValue(control.value)) {
        return of(null);
      } else if (control.value === initialEmail) {
        return of(null);
      } else {
        return control.valueChanges.pipe(
          debounceTime(500),
          take(1),
          switchMap((_) =>
            this.LoginService.ValidateUser(control.value).pipe(
              map((user) =>
                user ? { existingEmail: { value: control.value } } : null
              )
            )
          )
        );
      }
    };
  }
}
