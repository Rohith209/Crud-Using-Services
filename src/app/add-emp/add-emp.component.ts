import { EmployeeService } from './../Services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
 

  constructor(private empService : EmployeeService) { }
arr;
  ngOnInit(): void {
   
  }
  addEmployee(name,id,company,skills,project,hcm) {
    let newEmployee = {
      name : "",
      id : 0,
      company : "",
      skills : "",
      project : "",
      hcm : ""
    }
    newEmployee.name = name.value;
    newEmployee.id = id.value;
    newEmployee.company = company.value;
    newEmployee.skills = skills.value;
    newEmployee.project = project.value;
    newEmployee.hcm = hcm.value;
    this.empService.newEmpName(newEmployee.name);
    this.empService.newEmpID(newEmployee.id);
    this.empService.newEmpCompany(newEmployee.company);
    this.empService.newEmpSkills(newEmployee.skills);
    this.empService.newEmpProject(newEmployee.project);
    this.empService.newEmpHCM(newEmployee.hcm);
    // this.empService.getEmp().subscribe(response=>{
    //   newEmployee=response as
    // this.empService.getEmp().push(newEmployee);
    
    }
    


  } 

