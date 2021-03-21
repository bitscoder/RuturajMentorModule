import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    isUserLoggedIn = false;
    isAuthenticated(){
        if(this.isUserLoggedIn){
            return true;
        }else{
            return false;
        }
    }
}
