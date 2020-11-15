import { LoginService} from './../Services/login.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
 
  
  model : any={};    

  errorMessage:string;    
  constructor(private router:Router,private LoginService:LoginService) { }    


  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  }    
  login(){    
    this.LoginService.Login(this.model).subscribe(    
      data => {    
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/profile']);    
              
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    

}
