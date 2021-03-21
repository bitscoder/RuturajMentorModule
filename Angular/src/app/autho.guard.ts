import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Router} from'@angular/router';
import { Observable } from 'rxjs';
import{LoginService} from "./login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthoGuard implements CanActivate {
  constructor(private loginservice: LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginservice.isAuthenticated()){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
