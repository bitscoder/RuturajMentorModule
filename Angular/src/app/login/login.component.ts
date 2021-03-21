import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='';
  password='';

  error: string | null = null;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('userData')){
      this.router.navigate(['/directory']);
    }
  }
  user= {
    username:'Ruturaj',
    password:'Rutu@123'} ;
  login(){
    if(this.username == "Ruturaj" && this.password=="Rutu@123"){
      
      localStorage.setItem('userData', JSON.stringify(this.user));
            this.loginService.isUserLoggedIn = true;
      this.router.navigate(['/directory']);
    }else{
      this.error ='Incorrect username or password';
    } 
  }

}
