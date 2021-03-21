import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { EmployeedirectoryComponent} from "./employeedirectory/employeedirectory.component"
import {AddemployeeComponent} from "./addemployee/addemployee.component";
import {AuthoGuard} from"./autho.guard"
import { from } from 'rxjs';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'directory',component:EmployeedirectoryComponent,canActivate: [AuthoGuard]},
  {path:'addemployee',component:AddemployeeComponent,canActivate:[AuthoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
