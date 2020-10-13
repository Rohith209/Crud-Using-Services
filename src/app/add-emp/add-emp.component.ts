import { EmployeeService } from './../Services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  newEmp: Object;
  employees: any[];

  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {    
  }

  createEmployee(name,id,company,skills,project,hcm){
    this.newEmp={
      name: name.value,
      id: id.value,
      company: company.value,
      skills: skills.value,
      project: project.value,
      hcm: hcm.value
    }

    this.empService.addEmployee(this.newEmp);
  }

  
 } 

