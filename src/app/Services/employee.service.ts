//import { EmployeeService } from './employee.service';
import { Employee } from './../model/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
//employeesArray : any;
//emp = [];
  constructor(private http : HttpClient) {
  }
    //baseURL : string = 'https://jsonblob.com/api/f59f6b05-0b65-11eb-876a-4f19bf9f5d47';
    employees = [
      {
        "name": "Rohith",
        "id": 872902,
        "company": "Cognizant",
        "skills": "Angular",
        "project": "admin",
        "hcm": "Sarah"
      },
      {
        "name": "Raghav",
        "id": 872903,
        "company": "Cognizant",
        "skills": "React",
        "project": "user",
        "hcm": "Satyam"
      },
      {
        "name": "Sashank",
        "id": 872904,
        "company": "Cognizant",
        "skills": "Angular",
        "project": "CTS homepage",
        "hcm": "Sarah"
      },
      {
        "name": "Sandhya",
        "id": 872905,
        "company": "Cognizant",
        "skills": "Angular",
        "project": "Coffee shop",
        "hcm": "Sarah"
      },
      {
        "name": "Akhil",
        "id": 12345,
        "company": "Wipro",
        "skills": "DotNet",
        "project": "Java",
        "hcm": "Srinivasan"
      },
      {
        "name": "Goutham",
        "id": 23456,
        "company": "TCS",
        "skills": "JAVA",
        "project": "DevOps",
        "hcm": "Muthu"
      },
      {
        "name": "Pritam",
        "id": 872906,
        "company": "Cognizant",
        "skills": "Angular",
        "project": "Bank Enterprise",
        "hcm": "Satyam"
      }
    ];
    

    getEmp(){
      //  this.http.get(this.baseURL).subscribe(Response =>{
      //   console.log(Response);
      //   this.employeesArray = Response;
      //   console.log(this.employeesArray);
      //   this.EmployeeService.e = this.employeesArray;

      // });
      return this.employees;       
    }
    // getEmp(){
    //   return this.http.get(this.baseURL);
    // }
    private empNameSource = new BehaviorSubject("default name");
    currentName = this.empNameSource.asObservable();
    private empIDSource = new BehaviorSubject(1234);
    currentID = this.empIDSource.asObservable();
    private empCompanySource = new BehaviorSubject("default company");
    currentCompany = this.empCompanySource.asObservable();
    private empSkillsSource = new BehaviorSubject("default Skills");
    currentSkills = this.empSkillsSource.asObservable();
    private empProjectSource = new BehaviorSubject("default Project");
    currentProject = this.empSkillsSource.asObservable();
    private empHCMSource = new BehaviorSubject("default HCM");
    currentHCM = this.empHCMSource.asObservable();

    newEmpName(message : string) {
      this.empNameSource.next(message);
    }
    newEmpID(message : number) {
      this.empIDSource.next(message);
    }
    newEmpCompany(message : string) {
      this.empCompanySource.next(message);
    }
    newEmpSkills(message : string) {
      this.empSkillsSource.next(message);
    }
    newEmpProject(message : string) {
      this.empProjectSource.next(message);
    }
    newEmpHCM(message : string) {
      this.empHCMSource.next(message);
    }

}
