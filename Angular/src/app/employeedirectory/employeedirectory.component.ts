import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeelistService } from '../employeelist.service';
import { Employee } from '../employee';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-employeedirectory',
  templateUrl: './employeedirectory.component.html',
  styleUrls: ['./employeedirectory.component.css']
})
export class EmployeedirectoryComponent implements OnInit {
  private employeeSubscription!: Subscription;

  constructor(private router: Router, private employeelistservice: EmployeelistService, private loginService: LoginService) { }

  employees!: Employee[];

  ngOnInit(): void {

    this.employees = this.employeelistservice.getEmployees();
    this.employeeSubscription = this.employeelistservice.employeeChanged.subscribe(
      (employees: Employee[]) => {this.employees = employees;});
  }

  onAddEmployee(){
    this.router.navigate(['/addemployee']);
  }
}
