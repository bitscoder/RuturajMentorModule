import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeelistService } from '../employeelist.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  @ViewChild('myForm') Formvalue!: NgForm;

  

  newemployee = {
    emp_id : '',
    name: '',
    team: '',
    designation: '',
    gender: '',
    doj: ''
  }
  genders = ['Male', 'Female'];
  constructor(private employeelistservice: EmployeelistService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const datevalue = this.Formvalue.value.doj  
    const month=datevalue.getMonth()+1;
    const datevalue2 = datevalue.getDate()+"/"+month+"/"+datevalue.getFullYear();

    this.newemployee.emp_id = this.Formvalue.value.emp_id;
    this.newemployee.name = this.Formvalue.value.name;
    this.newemployee.team = this.Formvalue.value.team;
    this.newemployee.designation = this.Formvalue.value.designation;
    this.newemployee.gender = this.Formvalue.value.gender;
    this.newemployee.doj = datevalue2;
    this.employeelistservice.addEmployee(this.newemployee);
    this.router.navigate(['/directory']);

  }

}
