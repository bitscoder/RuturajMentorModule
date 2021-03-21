import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Employee } from "./employee";
@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {

  employeeChanged = new Subject<Employee[]>();

    private employees: Employee[] = [new Employee('1269', 'John','Rocket','Developer','Male','1/1/2020'), ];

    addEmployee(employee: Employee){
        this.employees.push(employee);
        this.employeeChanged.next(this.employees.slice());
    }

    getEmployees(){
        return this.employees.slice();
    }

    getEmp(){
        return this.employees.slice();
    }
}
