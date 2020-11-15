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
  UserForm: any;    
  massage:string;    

  constructor(private loginService:LoginService,private formbulider: FormBuilder,  service: UniversityService ) {
    this.university = service.getuniversity();
   
  }

 
  ngOnInit(): void {
    this.filtereduniversity = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
    this.UserForm = this.formbulider.group({    
      UserName: ['', [Validators.required]],    
      Password: ['', [Validators.required]],    
      Email: ['', [Validators.required  ,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],    
      PhoneNumber: ['', [Validators.required,Validators.minLength(6)]],    
    });    

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.university.filter((university) =>
      university.toLowerCase().includes(filterValue)
    );
  }
  onFormSubmit(user)    
  {
    this.ValidateUser(user.UserName);
    this.Createemployee(user);    
  }    
  Createemployee(register:Register)    
  {    
  this.loginService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.UserForm.reset();    
    });    
  }    

  ValidateUser(username) {
    $.ajax(  
      {  
          type: 'POST',  
          dataType: 'JSON',  
          url: '/Login/Validuser',  
          data: { UserName: username },  
          success:  
              function (response)  
              {  
                  $("Validuser").text = response;
              },  
          error:  
              function (response)  
              {  
                  alert("Error: " + response);  
              }  
      });  
  }

}
